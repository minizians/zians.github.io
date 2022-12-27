"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[653],{20102:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{destroyOnClose:"",title:"评论回复"},on:{close:t.onClose},scopedSlots:t._u([{key:"footer",fn:function(){return[e("ReactiveButton",{attrs:{errored:t.submitErrored,loading:t.submitting,erroredText:"回复失败",loadedText:"回复成功",text:"回复",type:"primary"},on:{callback:t.handleSubmitCallback,click:t.handleSubmit}})]},proxy:!0}]),model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("a-form-model",{ref:"replyCommentForm",attrs:{model:t.model,rules:t.rules,layout:"vertical"}},[e("a-form-model-item",{attrs:{prop:"content"}},[e("a-input",{ref:"contentInput",attrs:{autoSize:{minRows:8},type:"textarea"},model:{value:t.model.content,callback:function(e){t.$set(t.model,"content",e)},expression:"model.content"}})],1)],1)],1)},i=[],n=s(73541),o={name:"CommentReplyModal",props:{visible:{type:Boolean,default:!0},comment:{type:Object,default:null},targetId:{type:Number,default:0},target:{type:String,required:!0,validator:t=>-1!==["post","sheet","journal"].indexOf(t)}},data(){return{model:{},submitting:!1,submitErrored:!1,rules:{content:[{required:!0,message:"* 内容不能为空",trigger:["change"]}]}}},computed:{modalVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},watch:{modalVisible(t){t&&this.$nextTick((()=>{this.$refs.contentInput.focus()}))}},methods:{handleSubmit(){const t=this;t.$refs.replyCommentForm.validate((async e=>{if(e)try{t.submitting=!0,t.model.postId=t.targetId,t.comment&&(t.model.parentId=t.comment.id),await n.Z.comment.create(`${t.target}s`,t.model)}catch(s){t.submitErrored=!0}finally{setTimeout((()=>{t.submitting=!1}),400)}}))},handleSubmitCallback(){this.submitErrored?this.submitErrored=!1:(this.model={},this.modalVisible=!1,this.$emit("succeed"))},onClose(){this.model={},this.modalVisible=!1}}},l=o,r=s(1001),c=(0,r.Z)(l,a,i,!1,null,null,null),u=c.exports},45560:function(t,e,s){s.d(e,{Z:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{afterClose:t.onClose,title:t.title,width:1024,destroyOnClose:""},scopedSlots:t._u([{key:"footer",fn:function(){return[t._t("extraFooter"),e("a-button",{attrs:{type:"primary"},on:{click:function(e){t.replyModalVisible=!0}}},[t._v("创建评论")]),e("a-button",{on:{click:function(e){t.modalVisible=!1}}},[t._v("关闭")])]},proxy:!0}],null,!0),model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("a-list",{attrs:{loading:t.list.loading,"item-layout":"vertical"}},t._l(t.list.data,(function(s,a){return e("TargetCommentTreeNode",{key:a,attrs:{comment:s,target:t.target,"target-id":t.targetId},on:{reload:t.handleGetComments}})})),1),e("div",{staticClass:"page-wrapper"},[e("a-pagination",{staticClass:"pagination",attrs:{current:t.pagination.page,defaultPageSize:t.pagination.size,pageSizeOptions:["10","20","50","100"],total:t.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePageChange,showSizeChange:t.handlePageSizeChange}})],1),e("CommentReplyModal",{attrs:{target:t.target,"target-id":t.targetId,visible:t.replyModalVisible},on:{"update:visible":function(e){t.replyModalVisible=e},succeed:t.handleGetComments}})],1)},i=[],n=function(){var t=this,e=t._self._c;return e("a-list-item",{staticClass:"!p-0"},[e("a-comment",{scopedSlots:t._u([{key:"author",fn:function(){return[e("a",{attrs:{href:t.comment.authorUrl,target:"_blank"}},[t.comment.isAdmin?e("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):t._e(),t._v(" "+t._s(t.comment.author)+" ")],1)]},proxy:!0},{key:"avatar",fn:function(){return[e("a-avatar",{attrs:{alt:t.comment.author,src:t.comment.avatar,size:"large"}})]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"comment-modal-content",domProps:{innerHTML:t._s(t.$options.filters.markdownRender(t.comment.content))}})]},proxy:!0},{key:"datetime",fn:function(){return[e("a-tooltip",{scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v(t._s(t._f("moment")(t.comment.createTime)))])]},proxy:!0}])},[e("span",[t._v(t._s(t._f("timeAgo")(t.comment.createTime)))])])]},proxy:!0},{key:"actions",fn:function(){return["AUDITING"===t.comment.status?e("a-dropdown",{attrs:{trigger:["click"]},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("a-menu",[e("a-menu-item",{key:"1",on:{click:function(e){return t.handleChangeStatus("PUBLISHED")}}},[t._v(" 通过")]),e("a-menu-item",{key:"2",on:{click:t.handlePublishAndReply}},[t._v(" 通过并回复")])],1)]},proxy:!0}],null,!1,357119804)},[e("span",[t._v("通过")])]):"PUBLISHED"===t.comment.status?e("span",{on:{click:function(e){t.replyModalVisible=!0}}},[t._v("回复")]):"RECYCLE"===t.comment.status?e("a-popconfirm",{attrs:{title:"你确定要还原该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus("PUBLISHED")}}},[t._v(" 还原 ")]):t._e(),"PUBLISHED"===t.comment.status||"AUDITING"===t.comment.status?e("a-popconfirm",{attrs:{title:"你确定要将该评论移到回收站？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus("RECYCLE")}}},[t._v(" 回收站 ")]):t._e(),e("a-popconfirm",{attrs:{title:"你确定要永久删除该评论？",cancelText:"取消",okText:"确定"},on:{confirm:t.handleDelete}},[t._v(" 删除 ")])]},proxy:!0}])},[t.comment.children?t._l(t.comment.children,(function(s,a){return e("TargetCommentTreeNode",{key:a,attrs:{comment:s,target:t.target,"target-id":t.targetId},on:{reload:function(e){return t.$emit("reload")}}})})):t._e(),e("CommentReplyModal",{attrs:{comment:t.comment,target:t.target,"target-id":t.targetId,visible:t.replyModalVisible},on:{"update:visible":function(e){t.replyModalVisible=e},succeed:function(e){return t.$emit("reload")}}})],2)],1)},o=[],l=s(73541),r=s(20102),c={name:"TargetCommentTreeNode",components:{CommentReplyModal:r.Z},props:{target:{type:String,required:!0,validator:t=>-1!==["post","sheet","journal"].indexOf(t)},targetId:{type:Number,required:!0,default:0},comment:{type:Object,required:!1,default:null}},data(){return{replyModalVisible:!1}},methods:{async handleChangeStatus(t){try{await l.Z.comment.updateStatusById(`${this.target}s`,this.comment.id,t)}catch(e){this.$log.error("Failed to change comment status",e)}finally{this.$emit("reload")}},async handlePublishAndReply(){await this.handleChangeStatus("PUBLISHED"),this.replyModalVisible=!0},async handleDelete(){try{await l.Z.comment["delete"](`${this.target}s`,this.comment.id)}catch(t){this.$log.error("Failed to delete comment",t)}finally{this.$emit("reload")}}}},u=c,d=s(1001),p=(0,d.Z)(u,n,o,!1,null,null,null),h=p.exports,m={name:"TargetCommentListModal",components:{TargetCommentTreeNode:h,CommentReplyModal:r.Z},props:{visible:{type:Boolean,default:!0},title:{type:String,default:"评论"},target:{type:String,required:!0,validator:t=>-1!==["post","sheet","journal"].indexOf(t)},targetId:{type:Number,required:!0,default:0}},data(){return{list:{data:[],loading:!1,params:{page:0,size:10},total:0},replyModalVisible:!1}},computed:{modalVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}},pagination(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}}},watch:{modalVisible(t){t&&this.handleGetComments()},targetId(){this.handleGetComments()}},methods:{async handleGetComments(){try{this.list.loading=!0;const t=await l.Z.comment.listAsTreeView(`${this.target}s`,this.targetId,this.list.params);this.list.data=t.data.content,this.list.total=t.data.total}catch(t){this.$log.error("Failed to get target comments",t)}finally{this.list.loading=!1}},handlePageChange(t=1){this.list.params.page=t-1,this.handleGetComments()},handlePageSizeChange(t,e){this.list.params.page=0,this.list.params.size=e,this.handleGetComments()},onClose(){this.$emit("close")}}},g=m,y=(0,d.Z)(g,a,i,!1,null,null,null),f=y.exports},76653:function(t,e,s){s.r(e),s.d(e,{default:function(){return I}});var a=function(){var t=this,e=t._self._c;return e("page-view",[e("PostListView",{ref:"postListView",attrs:{columns:t.postColumns,"default-statuses":[t.postStatuses.PUBLISHED.value,t.postStatuses.DRAFT.value,t.postStatuses.INTIMATE.value]},on:{"change:params":t.onChangeParams},scopedSlots:t._u([{key:"operator-before",fn:function(){return[e("router-link",{attrs:{to:{name:"PostWrite"}}},[e("a-button",{attrs:{icon:"plus",type:"primary"}},[t._v("写文章")])],1)]},proxy:!0},{key:"operator-after",fn:function(){return[e("a-button",{attrs:{icon:"delete"},on:{click:function(e){t.recyclePostModalVisible=!0}}},[t._v(" 回收站")])]},proxy:!0}])}),e("RecyclePostModal",{attrs:{visible:t.recyclePostModalVisible},on:{"update:visible":function(e){t.recyclePostModalVisible=e},close:t.onRecyclePostModalClose}})],1)},i=[],n=s(79623),o=function(){var t=this,e=t._self._c;return e("div",[e("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[t.searchWrapper?e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"关键词："}},[e("a-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery()}},model:{value:t.list.params.keyword,callback:function(e){t.$set(t.list.params,"keyword",e)},expression:"list.params.keyword"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"文章状态："}},[e("a-select",{attrs:{allowClear:"",placeholder:"请选择文章状态"},on:{change:t.handleChangeQueryStatus},model:{value:t.list.params.status,callback:function(e){t.$set(t.list.params,"status",e)},expression:"list.params.status"}},t._l(Object.keys(t.normalPostStatuses),(function(s){return e("a-select-option",{key:s,attrs:{value:s}},[t._v(" "+t._s(t.postStatuses[s].text)+" ")])})),1)],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"分类目录："}},[e("CategorySelectTree",{attrs:{categories:t.categories.data,"category-id":t.list.params.categoryId,root:{id:0,title:"全部",value:"0",pId:-1}},on:{"update:categoryId":function(e){return t.$set(t.list.params,"categoryId",e)},"update:category-id":function(e){return t.$set(t.list.params,"categoryId",e)},change:t.handleQuery}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons"},[e("a-space",[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleQuery()}}},[t._v("查询")]),e("a-button",{on:{click:function(e){return t.handleResetParam()}}},[t._v("重置")])],1)],1)])],1)],1)],1):t._e(),e("div",{staticClass:"mb-5"},[e("a-space",[t._t("operator-before"),t.selectedRowKeys.length&&!t.isMobile()?e("a-dropdown",{scopedSlots:t._u([{key:"overlay",fn:function(){return[e("a-menu",[e("a-menu-item",{on:{click:function(e){return t.handleChangeStatusInBatch(t.postStatuses.PUBLISHED.value)}}},[t._v("发布")]),e("a-menu-item",{on:{click:function(e){return t.handleChangeStatusInBatch(t.postStatuses.DRAFT.value)}}},[t._v("转为草稿")]),t.defaultStatuses.includes(t.postStatuses.RECYCLE.value)?e("a-menu-item",{on:{click:t.handleDeleteInBatch}},[t._v(" 永久删除 ")]):e("a-menu-item",{on:{click:function(e){return t.handleChangeStatusInBatch(t.postStatuses.RECYCLE.value)}}},[t._v("删除")])],1)]},proxy:!0}],null,!1,4256031592)},[e("a-button",[t._v(" 批量操作 "),e("a-icon",{attrs:{type:"down"}})],1)],1):t._e(),t._t("operator-after")],2)],1),e("div",[t.isMobile()?e("a-list",{attrs:{dataSource:t.list.data,loading:t.list.loading,pagination:!1,itemLayout:"vertical",size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(s,a){return[e("a-list-item",{key:a,scopedSlots:t._u([{key:"actions",fn:function(){return[e("span",[e("a-icon",{attrs:{type:"eye"}}),t._v(" "+t._s(s.visits)+" ")],1),e("span",{on:{click:function(e){return t.handleOpenPostComments(s)}}},[e("a-icon",{attrs:{type:"message"}}),t._v(" "+t._s(s.commentCount)+" ")],1),e("a-dropdown",{attrs:{trigger:["click"],placement:"topLeft"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("a-menu",[[t.postStatuses.PUBLISHED.value,t.postStatuses.DRAFT.value,t.postStatuses.INTIMATE.value].includes(s.status)?e("a-menu-item",{on:{click:function(e){return t.handleEditClick(s)}}},[t._v(" 编辑 ")]):s.status===t.postStatuses.RECYCLE.value?e("a-menu-item",[e("a-popconfirm",{attrs:{title:"确定要发布【"+s.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(s.id,t.postStatuses.PUBLISHED.value)}}},[t._v(" 还原 ")])],1):t._e(),[t.postStatuses.PUBLISHED.value,t.postStatuses.DRAFT.value,t.postStatuses.INTIMATE.value].includes(s.status)?e("a-menu-item",[e("a-popconfirm",{attrs:{title:"确定要删除【"+s.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(s.id,t.postStatuses.RECYCLE.value)}}},[t._v(" 删除 ")])],1):s.status===t.postStatuses.RECYCLE.value?e("a-menu-item",[e("a-popconfirm",{attrs:{title:"确定要永久删除【"+s.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleDelete(s.id)}}},[t._v(" 删除 ")])],1):t._e(),e("a-menu-item",{on:{click:function(e){return t.handleOpenPostSettings(s)}}},[t._v("设置")])],1)]},proxy:!0}],null,!0)},[e("span",[e("a-icon",{attrs:{type:"bars"}})],1)])]},proxy:!0},{key:"extra",fn:function(){return[e("a-badge",{attrs:{status:t.postStatuses[s.status].status,text:t._f("statusText")(s.status)}})]},proxy:!0}],null,!0)},[e("a-list-item-meta",{scopedSlots:t._u([{key:"description",fn:function(){return[t._v(" "+t._s(t._f("moment")(s.createTime))+" ")]},proxy:!0},{key:"title",fn:function(){return[e("div",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[0!==s.topPriority?e("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"red",type:"pushpin"}}):t._e(),s.inProgress?e("a-tooltip",{attrs:{placement:"top",title:"当前有内容已保存，但还未发布。"}},[e("a-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"#52c41a",type:"info-circle"},on:{click:function(e){return t.handleEditClick(s)}}})],1):t._e(),[t.postStatuses.PUBLISHED.value,t.postStatuses.INTIMATE.value].includes(s.status)?e("a-tooltip",{attrs:{title:"点击访问【"+s.title+"】",placement:"top"}},[e("a",{staticClass:"no-underline",attrs:{href:s.fullPath,target:"_blank"}},[t._v(" "+t._s(s.title)+" ")])]):s.status===t.postStatuses.DRAFT.value?e("a-tooltip",{attrs:{title:"点击预览【"+s.title+"】",placement:"top"}},[e("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handlePreview(s.id)}}},[t._v(" "+t._s(s.title)+" ")])]):e("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);",disabled:""}},[t._v(" "+t._s(s.title)+" ")])],1)]},proxy:!0}],null,!0)}),s.summary?e("div",{staticClass:"mb-3 block"},[e("span",[t._v(" "+t._s(s.summary)+"... ")])]):t._e(),e("div",{staticClass:"block"},t._l(s.categories,(function(s,a){return e("a-tag",{key:"category_"+a,staticStyle:{"margin-bottom":"8px"},attrs:{color:"blue"}},[t._v(" "+t._s(s.name)+" ")])})),1),t._l(s.tags,(function(t,s){return e("post-tag",{key:s,staticStyle:{"margin-bottom":"8px"},attrs:{tag:t}})}))],2)]}}],null,!1,2822372946)}):e("a-table",{attrs:{columns:t.columns,dataSource:t.list.data,loading:t.list.loading,pagination:!1,rowKey:t=>t.id,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectionChange},scrollToFirstRowOnChange:!0},scopedSlots:t._u([{key:"postTitle",fn:function(s,a){return[0!==a.topPriority?e("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"red",type:"pushpin"}}):t._e(),a.inProgress?e("a-tooltip",{attrs:{placement:"top",title:"当前有内容已保存，但还未发布。"}},[e("a-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"#52c41a",type:"info-circle"},on:{click:function(e){return t.handleEditClick(a)}}})],1):t._e(),[t.postStatuses.PUBLISHED.value,t.postStatuses.INTIMATE.value].includes(a.status)?e("a-tooltip",{attrs:{title:"点击访问【"+s+"】",placement:"top"}},[e("a",{staticClass:"no-underline",attrs:{href:a.fullPath,target:"_blank"}},[t._v(" "+t._s(s)+" ")])]):a.status===t.postStatuses.DRAFT.value?e("a-tooltip",{attrs:{title:"点击预览【"+s+"】",placement:"top"}},[e("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handlePreview(a.id)}}},[t._v(" "+t._s(s)+" ")])]):e("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);",disabled:""}},[t._v(" "+t._s(s)+" ")])]}},{key:"status",fn:function(s){return[e("a-badge",{attrs:{status:t.postStatuses[s].status,text:t._f("statusText")(s)}})]}},{key:"categories",fn:function(s){return t._l(s,(function(s,a){return e("a-tag",{key:a,staticStyle:{"margin-bottom":"8px"},attrs:{color:"blue"}},[t._v(" "+t._s(s.name)+" ")])}))}},{key:"tags",fn:function(s){return t._l(s,(function(t,s){return e("post-tag",{key:s,staticStyle:{"margin-bottom":"8px"},attrs:{tag:t}})}))}},{key:"commentCount",fn:function(s,a){return[e("a-badge",{staticClass:"cursor-pointer",attrs:{count:a.commentCount,numberStyle:{backgroundColor:"#f38181"},overflowCount:999,showZero:!0},on:{click:function(e){return t.handleOpenPostComments(a)}}})]}},{key:"visits",fn:function(t){return[e("a-badge",{staticClass:"cursor-pointer",attrs:{count:t,numberStyle:{backgroundColor:"#00e0ff"},overflowCount:9999,showZero:!0}})]}},{key:"createTime",fn:function(s){return[e("a-tooltip",{attrs:{placement:"top"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t._f("moment")(s))+" ")]},proxy:!0}],null,!0)},[t._v(" "+t._s(t._f("timeAgo")(s))+" ")])]}},{key:"action",fn:function(s,a){return[[t.postStatuses.PUBLISHED.value,t.postStatuses.DRAFT.value,t.postStatuses.INTIMATE.value].includes(a.status)?e("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(e){return t.handleEditClick(a)}}},[t._v(" 编辑 ")]):a.status===t.postStatuses.RECYCLE.value?e("a-popconfirm",{attrs:{title:"确定要发布【"+a.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(a.id,t.postStatuses.PUBLISHED.value)}}},[e("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("还原")])],1):t._e(),e("a-divider",{attrs:{type:"vertical"}}),[t.postStatuses.PUBLISHED.value,t.postStatuses.DRAFT.value,t.postStatuses.INTIMATE.value].includes(a.status)?e("a-popconfirm",{attrs:{title:"确定要删除【"+a.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(a.id,t.postStatuses.RECYCLE.value)}}},[e("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("删除")])],1):a.status===t.postStatuses.RECYCLE.value?e("a-popconfirm",{attrs:{title:"确定要永久删除【"+a.title+"】文章？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleDelete(a.id)}}},[e("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("删除")])],1):t._e(),e("a-divider",{attrs:{type:"vertical"}}),e("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(e){return t.handleOpenPostSettings(a)}}},[t._v("设置")])]}}])}),e("div",{staticClass:"page-wrapper"},[e("a-pagination",{staticClass:"pagination",attrs:{current:t.pagination.page,defaultPageSize:t.pagination.size,pageSizeOptions:["5","10","20","50","100"],total:t.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePageChange,showSizeChange:t.handlePageSizeChange}})],1)],1)]),e("PostSettingModal",{attrs:{loading:t.postSettingLoading,post:t.list.selected,savedCallback:t.onPostSavedCallback,visible:t.postSettingVisible},on:{"update:visible":function(e){t.postSettingVisible=e},onClose:function(e){t.list.selected={}}},scopedSlots:t._u([{key:"extraFooter",fn:function(){return[e("a-button",{attrs:{disabled:t.selectPreviousButtonDisabled},on:{click:t.handleSelectPrevious}},[t._v(" 上一篇")]),e("a-button",{attrs:{disabled:t.selectNextButtonDisabled},on:{click:t.handleSelectNext}},[t._v(" 下一篇")])]},proxy:!0}])}),e("TargetCommentListModal",{attrs:{"target-id":t.list.selected.id,title:`「${t.list.selected.title}」的评论`,visible:t.postCommentVisible,target:"post"},on:{"update:visible":function(e){t.postCommentVisible=e},close:t.onPostCommentsClose},scopedSlots:t._u([{key:"extraFooter",fn:function(){return[e("a-button",{attrs:{disabled:t.selectPreviousButtonDisabled},on:{click:t.handleSelectPrevious}},[t._v(" 上一篇")]),e("a-button",{attrs:{disabled:t.selectNextButtonDisabled},on:{click:t.handleSelectNext}},[t._v(" 下一篇")])]},proxy:!0}])})],1)},l=[],r=(s(57658),s(87996)),c=s(45560),u=s(68930),d=s(3775),p=s(10438),h=s(73541),m={name:"PostListView",components:{PostSettingModal:r.Z,TargetCommentListModal:c.Z,CategorySelectTree:u.Z},mixins:[d.KT],props:{defaultStatuses:{type:Array,default:()=>[]},defaultPageSize:{type:Number,default:10},searchWrapper:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]}},data(){return{postStatuses:p.JQ,normalPostStatuses:p.hh,list:{data:[],loading:!1,total:0,hasPrevious:!1,hasNext:!1,params:{page:0,size:10,keyword:void 0,categoryId:void 0,statuses:[]},selected:{}},categories:{data:[],loading:!1},selectedRowKeys:[],postSettingVisible:!1,postSettingLoading:!1,postCommentVisible:!1}},computed:{pagination(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}},selectPreviousButtonDisabled(){const t=this.list.data.findIndex((t=>t.id===this.list.selected.id));return 0===t&&!this.list.hasPrevious},selectNextButtonDisabled(){const t=this.list.data.findIndex((t=>t.id===this.list.selected.id));return t===this.list.data.length-1&&!this.list.hasNext}},created(){this.list.params.statuses=this.defaultStatuses,this.list.params.size=this.defaultPageSize,this.handleListCategories()},watch:{"list.params":{deep:!0,handler:function(t){if(t){const t=JSON.parse(JSON.stringify(this.list.params));this.$emit("change:params",t)}}}},methods:{async handleListPosts(t=!0){try{t&&(this.list.loading=!0);const{categoryId:e}=this.list.params;this.list.params.categoryId=0===e?void 0:e;const s=await h.Z.post.list(this.list.params);if(0===s.data.content.length&&this.list.params.page>0)return this.list.params.page--,void await this.handleListPosts();this.list.data=s.data.content,this.list.total=s.data.total,this.list.hasPrevious=s.data.hasPrevious,this.list.hasNext=s.data.hasNext}catch(e){this.$log.error(e)}finally{this.list.loading=!1}},async handleListCategories(){try{this.categories.loading=!0;const t=await h.Z.category.list({sort:[],more:!0});this.categories.data=t.data}catch(t){this.$log.error(t)}finally{this.categories.loading=!1}},handleEditClick(t){this.$router.push({name:"PostEdit",query:{postId:t.id}})},onSelectionChange(t){this.selectedRowKeys=t,this.$log.debug(`SelectedRowKeys: ${t}`)},handlePageChange(t=1){this.list.params.page=t-1,this.handleListPosts()},handlePageSizeChange(t,e){this.$log.debug(`Current: ${t}, PageSize: ${e}`),this.list.params.page=0,this.list.params.size=e,this.handleListPosts()},handleResetParam(){this.list.params.keyword=void 0,this.list.params.categoryId=void 0,this.list.params.statuses=this.defaultStatuses,this.list.params.status=void 0,this.selectedRowKeys=[],this.handlePageChange(1),this.handleListCategories()},handleQuery(){this.selectedRowKeys=[],this.handlePageChange(1)},handleChangeQueryStatus(t){t?(this.list.params.statuses=[t],this.list.params.status=t):(this.list.params.statuses=this.defaultStatuses,this.list.params.status=void 0),this.handleQuery()},async handleChangeStatus(t,e){try{await h.Z.post.updateStatusById(t,e),this.$message.success("操作成功！")}catch(s){this.$log.error("Failed to change post status",s)}finally{await this.handleListPosts()}},async handleChangeStatusInBatch(t){this.selectedRowKeys.length<=0?this.$message.info("请至少选择一项！"):this.$confirm({title:"提示",content:`确定要将所选的文章转为${p.JQ[t].text}状态吗？`,okText:"确定",cancelText:"取消",onOk:async()=>{try{await h.Z.post.updateStatusInBatch(this.selectedRowKeys,t),this.selectedRowKeys=[],this.$message.success("操作成功！")}catch(e){this.$log.error("Failed to change status in batch",e)}finally{await this.handleListPosts()}}})},async handleDelete(t){try{await h.Z.post["delete"](t),this.$message.success("删除成功！")}catch(e){this.$log.error("Failed to delete post",e)}finally{await this.handleListPosts()}},async handleDeleteInBatch(){this.selectedRowKeys.length<=0?this.$message.info("请至少选择一项！"):this.$confirm({title:"提示",content:"确定删除所选的文章吗？",okText:"确定",cancelText:"取消",onOk:async()=>{try{await h.Z.post.deleteInBatch(this.selectedRowKeys),this.selectedRowKeys=[],this.$message.success("删除成功！")}catch(t){this.$log.error("Failed to delete posts in batch",t)}finally{await this.handleListPosts()}}})},async handleDeleteCurrentPage(){this.list.data.length?this.$confirm({title:"提示",content:"确定删除当前页的所有文章吗？",okText:"确定",cancelText:"取消",onOk:async()=>{try{const t=this.list.data.map((t=>t.id));await h.Z.post.deleteInBatch(t),this.$message.success("删除成功！")}catch(t){this.$log.error("Failed to delete posts in batch",t)}finally{await this.handleListPosts()}}}):this.$message.info("当前页没有文章")},async handleOpenPostSettings(t){try{this.postSettingVisible=!0,this.postSettingLoading=!0;const{data:e}=await h.Z.post.get(t.id);this.list.selected=e}catch(e){this.$log.error("Failed to open post settings",e)}finally{this.postSettingLoading=!1}},handleOpenPostComments(t){this.list.selected=t,this.postCommentVisible=!0},handlePreview(t){h.Z.post.getPreviewLinkById(t).then((t=>{window.open(t,"_blank")}))},onPostSavedCallback(){this.handleListPosts(!1)},onPostCommentsClose(){this.postCommentVisible=!1,this.list.selected={},this.handleListPosts(!1)},async handleSelectPrevious(){const t=this.list.data.findIndex((t=>t.id===this.list.selected.id));if(t>0){this.postSettingLoading=!0;const e=await h.Z.post.get(this.list.data[t-1].id);return this.list.selected=e.data,void(this.postSettingLoading=!1)}if(0===t&&this.list.hasPrevious){this.list.params.page--,await this.handleListPosts(),this.postSettingLoading=!0;const t=await h.Z.post.get(this.list.data[this.list.data.length-1].id);this.list.selected=t.data,this.postSettingLoading=!1}},async handleSelectNext(){const t=this.list.data.findIndex((t=>t.id===this.list.selected.id));if(t<this.list.data.length-1){this.postSettingLoading=!0;const e=await h.Z.post.get(this.list.data[t+1].id);return this.list.selected=e.data,void(this.postSettingLoading=!1)}if(t===this.list.data.length-1&&this.list.hasNext){this.list.params.page++,await this.handleListPosts(),this.postSettingLoading=!0;const t=await h.Z.post.get(this.list.data[0].id);this.list.selected=t.data,this.postSettingLoading=!1}}},filters:{statusText(t){return t?p.JQ[t].text:""}}},g=m,y=s(1001),f=(0,y.Z)(g,o,l,!1,null,null,null),v=f.exports,S=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{afterClose:t.onClose,bodyStyle:{padding:"8px"},width:1080,destroyOnClose:"",title:"回收站"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("a-button",{on:{click:function(e){t.modalVisible=!1}}},[t._v("关闭")])]},proxy:!0}]),model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("PostListView",{ref:"postListView",attrs:{columns:t.recyclePostColumns,"default-page-size":5,"default-statuses":[t.postStatuses.RECYCLE.value],searchWrapper:!1},scopedSlots:t._u([{key:"operator-after",fn:function(){return[e("a-button",{attrs:{icon:"delete",type:"danger"},on:{click:t.handleDeleteCurrentPage}},[t._v("删除当前页")])]},proxy:!0}])})],1)},b=[],C={name:"RecyclePostModal",components:{PostListView:v},props:{visible:{type:Boolean,default:!0}},data(){return{postStatuses:p.JQ,recyclePostColumns:p.z$}},computed:{modalVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},watch:{modalVisible(t){t&&this.$nextTick((()=>{this.$refs.postListView.handleListPosts()}))}},methods:{onClose(){this.$emit("close")},handleDeleteCurrentPage(){this.$refs.postListView.handleDeleteCurrentPage()}}},k=C,_=(0,y.Z)(k,S,b,!1,null,null,null),P=_.exports,w={name:"PostList",components:{PageView:n.B4,PostListView:v,RecyclePostModal:P},data(){return{postStatuses:p.JQ,postColumns:p.nM,recyclePostModalVisible:!1}},beforeRouteEnter(t,e,s){s((e=>{const s=e.$refs.postListView;t.query.page&&(s.list.params.page=Number(t.query.page)),t.query.size&&(s.list.params.size=Number(t.query.size)),s.list.params.sort=t.query.sort,s.list.params.keyword=t.query.keyword,s.list.params.categoryId=t.query.categoryId,s.list.params.status=t.query.status,s.handleListPosts()}))},methods:{onChangeParams(t){const e=this.$router.history.current.path;this.$router.replace({path:e,query:t}).catch((t=>t))},onRecyclePostModalClose(){this.$refs.postListView.handleListPosts()}}},x=w,T=(0,y.Z)(x,a,i,!1,null,null,null),I=T.exports}}]);