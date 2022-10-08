<template>
  <form>
    <img :src="structureFormula" style="width:50%"/>
    <div class="form-control">
      <h2>{{compoundName}}</h2>
    </div>
    <div class="form-control">
      <h2>CAS Registry Number:{{CAS_registryNumber}}</h2>
      <h2>molecular formula:{{molecularFormula}}</h2>
      <h2>SMILES:{{smiles}}</h2>
    </div>
    <div class="form-control">
      <img :src="oneDimension" style="width:50%"/>
      <img :src="twoDimension" style="width:50%"/>
      <img :src="IR" style="width:50%"/>
      <img :src="Roman" style="width:50%"/>
      <img :src="xRay" style="width:50%"/>
    </div>

  </form>
</template>

<script>
 //相对路径
export default {
  props:['compoundName','CAS_registryNumber','molecularFormula','smiles','structureFormula','oneDimension','twoDimension','IR','Roman','xRay']

}
</script>

<style scoped>

</style>