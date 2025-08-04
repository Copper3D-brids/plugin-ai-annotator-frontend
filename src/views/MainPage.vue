<template>
  <LayoutOnePanel ref="layoutTwoPanelsRef">
    <LeftPanel/>
    <!-- <template #right>
      <RightPanel :panel-width="layoutTwoPanelsRef?.rightPanelWidth"/>
    </template> -->
  </LayoutOnePanel>
</template>

<script setup lang="ts">
import { ref} from "vue";
// import LayoutTwoPanels from "@/components/view-components/LayoutTwoPanels.vue";
import LayoutOnePanel from "@/components/view-components/LayoutOnePanel.vue";
import LeftPanel from "./components/left-panel-core/left.vue";
import RightPanel from "./components/right-panel-core/right.vue";

// const layoutTwoPanelsRef = ref<InstanceType<typeof LayoutOnePanel>>();

</script>

<style scoped>

</style>