const app = Vue.createApp({
    data() {
        return {
            text:'',
            textArray:[]
        }
    },
    methods:{
        inArray(){
            if(this.text==""){
                return false
            }else{
            this.textArray.push({content:this.text});
            this.text=""; 
            this.save();
            }
           
        },
        delitem(item){
            this.textArray.splice(this.textArray.indexOf(item),1);
            this.save();
        },
        allDel(){
            this.textArray=[];
            this.save()
        },
        save(){
            localStorage.setItem('content',JSON.stringify(this.textArray));
        }
        
    },
    mounted(){
        if(localStorage.getItem('content')){
            this.textArray=JSON.parse(localStorage.getItem('content'))
        }        
    }
})


app.mount('#app')