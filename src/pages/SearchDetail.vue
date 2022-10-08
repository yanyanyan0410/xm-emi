<template>
  <h2>search results</h2>
  <div>
    <base-card>
      <result-list></result-list>
    </base-card>

  </div>
</template>

<script>
import ResultList from "@/components/search/resultList";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "SearchDetail",
  components: {BaseCard, ResultList}
}
</script>

<style scoped>

</style>