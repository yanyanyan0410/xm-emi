import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import structure from '../assets/test/structure.png'
import oneDtwoD from '../assets/test/oneDtwoD.png'
import IR from '../assets/test/IR.png'
import Roman from '../assets/test/Roman.jpg'
import xRay from '../assets/test/xRay.png'


import {createStore} from 'vuex'


const store =createStore(
    {
        state(){
        return{
            request:[],
            molecules:[
                {
                    id:'m1',
                    compoundName:['benzene','1-3-5-cyclohexatriene','benzol','苯'],
                    CAS_registryNumber:'71-43-2',
                    molecularFormula:'C6H6',
                    smiles:'',
                    structureFormula:structure,
                    electrochemistry:{
                        oneDimensionHistogram:oneDtwoD,
                        twoDimensionHistogram:oneDtwoD
                    },
                    spectroscopy:{
                        IR:IR,
                        Roman: Roman,
                        xRay:xRay
                    }

                },
                {
                    id:'m2',
                    compoundName:['ethanol','alcohol','乙醇','酒精'],
                    CAS_registryNumber:'64-17-5',
                    molecularFormula:'C2H6O',
                    smiles:'',
                    structureFormula:structure,
                    electrochemistry:{
                        oneDimensionHistogram:oneDtwoD,
                        twoDimensionHistogram:oneDtwoD
                    },
                    spectroscopy:{
                        IR:IR,
                        Roman: Roman,
                        xRay:xRay
                    }

                }
            ]
        }
    },
    mutations,
    actions,
    getters
    }
)
export default store


