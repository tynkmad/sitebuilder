<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Create a reactive variable to store the blog posts
const blogPosts = ref<any[]>([]); // 'any[]' is used because the array will contain objects

// Define the function to fetch the Medium feed
async function fetchMediumFeed() {
    const response = await fetch('https://medium.com/feed/promanage');
    const xmlString = await response.text();

    // Parse the XML string
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Get all item elements
    const items = xmlDoc.querySelectorAll("item");

    // Create an array to hold the blog posts
    const posts = Array.from(items).map(item => {
        const titleElement = item.querySelector("title");
        const linkElement = item.querySelector("link");
        const pubDateElement = item.querySelector("pubDate");
        const contentElement = item.querySelector("content\\:encoded"); // Using namespaced selector

        return {
            title: titleElement ? titleElement.textContent : 'No Title', // Fallback value if null
            link: linkElement ? linkElement.textContent : 'No Link', // Fallback value if null
            pubDate: pubDateElement && pubDateElement.textContent
                ? new Date(pubDateElement.textContent)
                : new Date(0), // Fallback to epoch date
            content: contentElement ? contentElement.textContent : 'No Content' // Fallback value if null
        };
    });

    return posts;
}

// Use onMounted to call the fetch function when the component is mounted
onMounted(async () => {
    try {
        const posts = await fetchMediumFeed();
        blogPosts.value = posts; // Update the reactive variable
    } catch (error) {
        console.error('Error fetching Medium feed:', error);
    }
});
</script>

<template>
    <h1>Blog Posts</h1>
    <ul>
        <li v-for="post in blogPosts" :key="post.link">
            <h2>{{ post.title }}</h2>
            <p>{{ post.pubDate.toDateString() }}</p>
            <a :href="post.link" target="_blank">Read More</a>
            <div v-html="post.content"></div>
        </li>
    </ul>
</template>
