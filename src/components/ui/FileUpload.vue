<script setup lang="ts">
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    default: "Upload File",
  },
  //   onUpload: {
  //     type: Function,
  //     required: true
  //   },
  //   onSave: {
  //     type: Function,
  //     required: true
  //   }
});

const file = ref<File | null>(null);

const onFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
  }
};

const uploadFile = () => {
  if (file.value) {
    // Use props directly
    console.log(file.value);
    // (onUpload as Function)(file.value);
  }
};

const saveFile = () => {
  if (file.value) {
    // Use props directly
    console.log(file.value);
    // (onSave as Function)(file.value);
  }
};
</script>
<template>
  <div class="data-group sk-margin-bottom">
    <div class="sk-h6 sk-margin-bottom">{{ label }}</div>
    <div class="upload-file">
      <div class="add-image sk-margin-bottom">
        <input type="file" @change="onFileSelect" />
        <span class="sk-icons">upload_file</span>
        <button class="sk-button sk-pill" @click="uploadFile">
          <span class="sk-button-text">Upload File</span>
          <span class="sk-ripple-container"></span>
        </button>
      </div>
      <button
        :disabled="!file"
        class="sk-button sk-block sk-primary"
        @click="saveFile"
      >
        <span class="sk-button-text">Save</span>
        <span class="sk-ripple-container"></span>
      </button>
    </div>
  </div>
</template>
<style>
/* #region File Input */
.upload-file {
  height: auto;
  .add-image {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 2.5rem;
    border: 0.2rem dashed rgba(var(--color-rgb-black) / 42%);
    border-radius: var(--border-radius-4);
    margin: 1rem 0 4rem;
    position: relative;
    .sk-icons {
      font-size: 4rem;
      margin-bottom: var(--gutter-small);
    }
    .sk-button.sk-pill {
      border: 0.1rem solid var(--color-border);
      pointer-events: none;
    }
    input[type="file"] {
      opacity: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;
    }
  }
}
/* .upload-file .add-image .sk-icons {
  font-size: 4rem;
  margin-bottom: var(--gutter-small);
} */

/* .upload-file .add-image .sk-button.sk-pill {
  border: 0.1rem solid var(--color-border);
  pointer-events: none;
} */

/* .upload-file {
  height: auto;
} */
/* .add-image {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2.5rem;
  border: 0.2rem dashed rgba(var(--color-rgb-black) / 42%);
  border-radius: var(--border-radius-4);
  margin: 1rem 0 4rem;
  position: relative;
} */
/* .add-image input[type="file"] {
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
} */
/* #endregion File Input */
</style>
