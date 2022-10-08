<template>
  <h2>search results</h2>
<!--  <img :src="logo" />-->
  <div>
    <base-card>
      <result-list
      v-for="molecule in searchedMolecule"
      :key="molecule.id"
      :id="molecule.id"
      :compoundName="molecule.compoundName[0]"
      :CAS_registryNumber="molecule.CAS_registryNumber"
      :molecularFormula="molecule.molecularFormula"
      :smiles="molecule.smiles"
      :structureFormula="molecule.structureFormula"
      :oneDimension="molecule.oneDimensionHistogram"
      :twoDimension="molecule.twoDimensionHistogram"
      :IR="molecule.IR"
      :Roman="molecule.Roman"
      :xRay="molecule.xRay"
      ></result-list>
    </base-card>

  </div>
</template>

<script>
import ResultList from "@/components/search/resultList";
import BaseCard from "@/components/ui/BaseCard";
// import logo from '../assets/test/logo.png'
export default {
  name: "SearchDetail",
  data(){
    return{
      // logo:logo
    }
  },
  components: {BaseCard, ResultList},
  computed: {
    searchedMolecule() {
      return this.$store.getters['search']
    }
  }
}
</script>

<style scoped>

</style>