<script setup lang="ts">
import { computed } from "vue";

interface Props {
  businessName?: string;
  promanageProfileUrl?: string;
  sulekhaProfileUrl?: string;
  copyrightYear?: number;
}

const props = withDefaults(defineProps<Props>(), {
  businessName: "",
  promanageProfileUrl: "",
  sulekhaProfileUrl: "",
  copyrightYear: undefined,
});

const year = computed(() => props.copyrightYear ?? new Date().getFullYear());
</script>

<template>
  <section class="footer">
    <div class="sk-container-fluid">
      <div class="sk-row social-row">
        <div class="sk-col-12 sk-col-fluid">
          <h4 class="sk-text-center sk-margin-top sk-margin-bottom-0">Get in Touch</h4>
          <div class="sk-flex sk-flex-align-center sk-flex-justify-center social sk-padding-y">
            <div class="sk-flex-row">
              <a
                v-if="promanageProfileUrl"
                :title="`Follow ${businessName} on Promanage`"
                :href="promanageProfileUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  :alt="`Follow ${businessName} on Promanage`"
                  height="24"
                  width="24"
                  src="https://lscdn.blob.core.windows.net/content/promanage/pm-icon.svg"
                />
              </a>
              <a
                v-if="sulekhaProfileUrl"
                :title="`Follow ${businessName} on Sulekha`"
                :href="sulekhaProfileUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  :alt="`Follow ${businessName} on Sulekha`"
                  height="24"
                  width="24"
                  src="https://lscdn.blob.core.windows.net/content/images/sulekha-emblem.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="sk-col-12 sk-col-fluid sk-text-center sk-padding-bottom">
          Copyright &copy;{{ year }} All rights reserved
        </div>
      </div>
    </div>
    <div class="promanage-footer sk-flex sk-flex-align-center sk-flex-justify-center sk-padding-bottom">
      <img
        src="https://lscdn.blob.core.windows.net/content/pro-manage/images/favicon.ico"
        width="32"
        height="32"
        alt="ProManage"
      />
      <div>
        Powered by
        <a href="https://www.promanage.biz/" title="ProManagesme.com" target="_blank" rel="noopener noreferrer"
          >ProManagesme.com</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer {
  background-color: #f1f3f7;
}

.promanage-footer {
  padding: var(--gutter-large) 0;
  flex-flow: column;
  gap: 1rem;
  background: #eafdff;
}

.footer .social a {
  background: var(--color-white);
  border-radius: var(--radius-round);
  border: 0.1rem solid var(--color-border);
  padding: var(--gutter-small);
}

.footer a {
  color: inherit;
}

.footer .promanage-footer a:hover {
  text-decoration: underline;
}
</style>
