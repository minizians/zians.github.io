"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[84],{68930:function(e,t,a){a.d(t,{Z:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("a-tree-select",{attrs:{allowClear:!0,treeData:e.categoryTreeData,treeDataSimpleMode:!0,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"","dropdown-style":{overflow:"auto"}},on:{change:e.handleChange},model:{value:e.categoryIdString,callback:function(t){e.categoryIdString=t},expression:"categoryIdString"}})},o=[],l=(a(57658),{name:"CategorySelectTree",props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:()=>[]},root:{type:Object,required:!1,default:()=>({id:0,title:"根目录",value:"0",pId:-1})}},computed:{categoryTreeData(){return[this.root,...this.convertDataToTree(this.categories)]},categoryIdString:{get(){return this.categoryId.toString()},set(e){this.$emit("update:categoryId",e?parseInt(e):0)}}},methods:{handleChange(){this.$emit("change")},convertDataToTree(e){const t={},a=[];e.forEach((e=>t[e.id]={...e,title:e.name,value:e.id.toString(),pId:e.parentId,children:[]})),e.forEach((e=>{const r=t[e.id];e.parentId?t[e.parentId].children.push(r):a.push(r)}));const r=(e,t=!1)=>{e.forEach((e=>{e.hasPassword=!!e.password||t,e.hasPassword&&(e.title=`${e.title}（加密）`),Object.hasOwn(e,"postCount")&&(e.title=`${e.title} - ${e.postCount} 篇`),e.children&&e.children.length&&r(e.children,e.hasPassword)}))};return r(a),a}}}),s=l,i=a(1001),n=(0,i.Z)(s,r,o,!1,null,null,null),d=n.exports},25084:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var r=function(){var e=this,t=e._self._c;return t("page-view",[t("a-row",{attrs:{gutter:12}},[t("a-col",{staticClass:"pb-3",attrs:{lg:8,md:8,sm:24,xl:8,xs:24}},[t("a-card",{attrs:{bodyStyle:{padding:"16px"},"head-style":{padding:"8px 16px!important"},title:e.title}},[t("a-form-model",{ref:"categoryForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"horizontal"}},[t("a-form-model-item",{attrs:{help:"* 页面上所显示的名称",label:"名称：",prop:"name"}},[t("a-input",{ref:"nameInput",model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),t("a-form-model-item",{attrs:{help:"* 一般为单个分类页面的标识，最好为英文",label:"别名：",prop:"slug"}},[t("a-input",{model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),t("a-form-model-item",{attrs:{label:"上级目录：",prop:"parentId"}},[t("category-select-tree",{attrs:{categories:e.list.data,"category-id":e.form.model.parentId},on:{"update:categoryId":function(t){return e.$set(e.form.model,"parentId",t)},"update:category-id":function(t){return e.$set(e.form.model,"parentId",t)}}})],1),t("a-form-model-item",{attrs:{help:"* 在分类页面可展示，需要主题支持",label:"封面图：",prop:"thumbnail"}},[t("AttachmentInput",{attrs:{title:"选择封面图"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1),t("a-form-model-item",{attrs:{help:"* 分类密码",label:"密码：",prop:"password"}},[t("a-input-password",{attrs:{autocomplete:"new-password"},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),t("a-form-model-item",{attrs:{help:"* 分类描述，需要主题支持",label:"描述：",prop:"description"}},[t("a-input",{attrs:{autoSize:{minRows:3},type:"textarea"},model:{value:e.form.model.description,callback:function(t){e.$set(e.form.model,"description",t)},expression:"form.model.description"}})],1),t("a-form-model-item",[e.isUpdateMode?t("a-button-group",[t("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"更新失败",loadedText:"更新成功",text:"更新",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateCategory}}),t("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.form.model={}}}},[e._v("返回添加")])],1):t("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateCategory}})],1)],1)],1)],1),t("a-col",{staticClass:"pb-3",attrs:{lg:16,md:16,sm:24,xl:16,xs:24}},[t("a-card",{attrs:{bodyStyle:{padding:"16px"},title:"分类列表"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("ReactiveButton",{attrs:{disabled:e.list.data.length<=0,errored:e.formBatch.errored,loading:e.formBatch.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存"},on:{callback:function(t){e.formBatch.errored=!1},click:e.handleUpdateBatch}})]},proxy:!0}])},[t("a-spin",{attrs:{spinning:e.list.loading}},[0===e.list.data.length?t("a-empty"):e._e(),t("CategoryTreeNode",{on:{edit:e.handleEdit,reload:e.handleListCategories,select:e.handleSelect},model:{value:e.list.treeData,callback:function(t){e.$set(e.list,"treeData",t)},expression:"list.treeData"}})],1)],1)],1)],1)],1)},o=[],l=(a(57658),a(79623)),s=a(68930),i=function(){var e=this,t=e._self._c;return t("a-list",{attrs:{"item-layout":"horizontal"}},[t("draggable",e._b({staticClass:"item-container",attrs:{list:e.list,value:e.value,handle:".mover",tag:"div"},on:{end:function(t){e.isDragging=!1},input:e.emitter,start:function(t){e.isDragging=!0}}},"draggable",{animation:300,group:"description",ghostClass:"ghost",chosenClass:"chosen",dragClass:"drag",emptyInsertThreshold:20},!1),[t("transition-group",e._l(e.realValue,(function(a){return t("div",{key:a.id},[t("a-list-item",{staticClass:"menu-item",scopedSlots:e._u([{key:"actions",fn:function(){return[t("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){return e.handleSelect(a)}}},[e._v("新增")]),t("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),t("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]},proxy:!0}],null,!0)},[t("a-list-item-meta",[t("span",{staticClass:"inline-block font-bold title",attrs:{slot:"title"},slot:"title"},[t("a-icon",{staticClass:"cursor-move mover mr-1",attrs:{type:"bars"}}),e._v(" "+e._s(a.name)+e._s(a.hasPassword?"（加密）":"")+" ")],1),t("span",{staticClass:"inline-block",attrs:{slot:"description"},slot:"description"},[t("a",{staticClass:"ant-anchor-link-title",attrs:{href:a.fullPath,target:"_blank"}},[e._v(" "+e._s(a.fullPath)+" ")])])])],1),t("div",{staticClass:"a-list-nested",staticStyle:{"margin-left":"44px"}},[t("CategoryTreeNode",{attrs:{list:a.children},on:{edit:e.handleEdit,reload:function(t){return e.$emit("reload")},select:e.handleSelect}})],1)],1)})),0)],1)],1)},n=[],d=a(9980),c=a.n(d),m=a(73541),h={name:"CategoryTreeNode",components:{draggable:c()},props:{value:{required:!1,type:Array,default:null},list:{required:!1,type:Array,default:null}},computed:{realValue(){return this.value?this.value:this.list}},data(){return{isDragging:!1}},methods:{emitter(e){this.$emit("input",e)},handleDelete(e){const t=this;t.$confirm({title:"提示",content:`确定要删除名为${e.name}的分类？`,async onOk(){try{await m.Z.category["delete"](e.id),t.$emit("reload")}catch(a){t.$log.error("Fail to delete category",a)}}})},handleEdit(e){this.$emit("edit",e)},handleSelect(e){this.$emit("select",e)}}},u=h,p=a(1001),g=(0,p.Z)(u,i,n,!1,null,"93ae2cf2",null),f=g.exports,y=a(3775),v={components:{PageView:l.B4,CategorySelectTree:s.Z,CategoryTreeNode:f},mixins:[y.jB,y.KT],data(){return{list:{data:[],treeData:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 分类名称不能为空",trigger:["change"]},{max:255,message:"* 分类名称的字符长度不能超过 255",trigger:["change"]}],slug:[{max:255,message:"* 分类别名的字符长度不能超过 255",trigger:["change"]}],thumbnail:[{max:1023,message:"* 封面图链接的字符长度不能超过 1023",trigger:["change"]}],description:[{max:100,message:"* 分类描述的字符长度不能超过 100",trigger:["change"]}]}},formBatch:{saving:!1,errored:!1}}},computed:{title(){return this.isUpdateMode?"修改分类":"添加分类"},isUpdateMode(){return!!this.form.model.id}},created(){this.handleListCategories()},methods:{async handleListCategories(){try{this.list.loading=!0;const{data:e}=await m.Z.category.list({});this.list.data=e,this.list.treeData=this.convertDataToTree(e)}catch(e){this.$log.error("Failed to get categories",e)}finally{this.list.loading=!1}},convertDataToTree(e){const t={},a=[];e.forEach((e=>t[e.id]={...e,children:[]})),e.forEach((e=>{const r=t[e.id];e.parentId?t[e.parentId].children.push(r):a.push(r)}));const r=(e,t=!1)=>{e.forEach((e=>{e.hasPassword=!!e.password||t,e.children&&e.children.length&&r(e.children,e.hasPassword)}))};return r(a),a},async handleEdit(e){try{const{data:t}=await m.Z.category.get(e.id);this.$refs.categoryForm.clearValidate(),this.form.model=t,this.$refs.nameInput.focus()}catch(t){this.$log.error("Failed to get category",t)}},handleSelect(e){this.form.model={parentId:e.id},this.$refs.nameInput.focus()},handleCreateOrUpdateCategory(){const e=this;e.$refs.categoryForm.validate((t=>{t&&(e.form.saving=!0,e.isUpdateMode?m.Z.category.update(e.form.model.id,e.form.model).catch((()=>{this.form.errored=!0})).finally((()=>{setTimeout((()=>{e.form.saving=!1}),400)})):m.Z.category.create(this.form.model).catch((()=>{this.form.errored=!0})).finally((()=>{setTimeout((()=>{e.form.saving=!1}),400)})))}))},async handleUpdateBatch(){const e=(t,a=0)=>t&&0!==t.length?t.reduce(((t,r,o)=>{r.priority=o+1,r.parentId=a;const l=r.children.length>0?e(r.children,r.id):[];return[...t,r,...l]}),[]):[],t=e(this.list.treeData);try{this.formBatch.saving=!0,await m.Z.category.updateInBatch(t)}catch(a){this.formBatch.errored=!0,this.$log.error("Failed to update categories",a)}finally{setTimeout((()=>{this.formBatch.saving=!1,this.handleListCategories()}),400)}},handleSavedCallback(){if(this.form.errored)this.form.errored=!1;else{const e=this;e.form.model={},e.handleListCategories()}},handleQueryCategoryPosts(e){this.$router.push({name:"PostList",query:{categoryId:e.id}})}}},b=v,C=(0,p.Z)(b,r,o,!1,null,null,null),x=C.exports}}]);