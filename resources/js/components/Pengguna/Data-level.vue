<template>
    <section class="content-header">
   <div class="container-fluid">
       <div class="row mb-2">
         <div class="col-sm-6">
           <h1>Data Level</h1>
         </div>
         <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item active">Data Level</li>
           </ol>
         </div>
       </div>
     </div>
    
       <div class="card">
       <div class="card-header">
   <h3 class="card-title">Title</h3>

   <div class="card-tools">
     <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
       <i class="fas fa-minus"></i></button>
     <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
       <i class="fas fa-times"></i></button>
   </div>
 </div>
 <div class="card-body">
   Ini Halaman dari Data Level
 </div>
 <!-- /.card-body -->
 <div class="card-footer">
   Footer
 </div>
 <!-- /.card-footer-->
</div>


</section>
</template>

<script>
   export default {
       mounted() {
           console.log('Component mounted.')
       }
   }
</script>
