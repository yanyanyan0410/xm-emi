<template>
  <div>
    <base-card>
      <search-list @search-molecule="searchMolecule"></search-list>
    </base-card>


  </div>
</template>

<script>
import SearchList from "@/components/search/SearchList";
import BaseCard from "@/components/ui/BaseCard";
export default {
  components: {BaseCard, SearchList},
  methods:{
    searchMolecule(data){
      this.$store.dispatch('sendRequest',data)  //action name
      this.$router.replace('/search')
    }
  }
}
</script>

