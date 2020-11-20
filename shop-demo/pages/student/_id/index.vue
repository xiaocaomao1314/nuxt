<template>
  <div>
    第{{$route.params.id}}个学生的故事
  </div>
</template>
<script>
export default {
  validate(obj){
    return /^\d$/.test(obj.params.id)
  }
}
</script>