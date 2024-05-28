<template>
  <view class="container">
    <uni-list>
      <uni-list-item title="昵称" :rightText="user.name" />
			<uni-list-item title="性别" :rightText="user.sex" />
      <uni-list-item title="手机号码" :rightText="user.phoneNum" />
      <uni-list-item title="邮箱" :rightText="user.Email" />
			<uni-list-item title="年级" :rightText="user.grade" />
      <uni-list-item title="角色" :rightText="user.isAdmin === 1 ? '超级管理员' : '普通用户'" />
    </uni-list>
  </view>
</template>

<script>
  import { getUserProfile } from "@/api/system/user"

  export default {
    data() {
      return {
        user: {
					name: "吴系挂",
					sex:"男",
				  phoneNum: "123456789" ,
					Email: "123@163.com",
					grade: "大三",
					isAdmin: 2
				}
      }
    },
    onLoad() {
      // this.getUser()
    },
    methods: {
      getUser() {
        getUserProfile().then(response => {
          this.user = response.data
        })
      }
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #ffffff;
  }
</style>
