<template>
  <form>
    <img :src="imgUrl" style="width:50%"/>
    <div class="form-control">
      <h2>benzene</h2>
    </div>
    <div class="form-control">
      <p2>CAS Registry Number:{{CAS_registryNumber}}</p2>
      <p2>molecular formula:{{molecularFormula}}</p2>
      <p2>SMILES:{{smiles}}</p2>
    </div>


  </form>
</template>

<script>
import img from '../../assets/benzene.png'  //相对路径
export default {
  data(){
    return{
      imgUrl:img
    }
  }

}
</script>

<style scoped>

</style>