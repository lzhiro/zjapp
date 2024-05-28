<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png"></image>
    <view class="text-area">
      <text class="title">请选择要进行的项目</text>
    </view>
	 <view class="question-modules">
	       <button @click="goToChinese" class="module">文科</button>
	       <button @click="goToSciences" class="module">理科</button>
	       <button @click="goToEngineering" class="module">工科</button>
		   <button @click="goToHistory" class="module">历史记录</button>
	     </view>
  </view>
</template>

<script>
  export default {
    methods: {
      goToChinese() {
        this.$tab.navigateTo(`/pages/Chinese`);
      },
      goToSciences() {
        this.$tab.navigateTo(`/pages/sciences`);
      },
      goToEngineering() {
        this.$tab.navigateTo(`/pages/engineering`);
      },
			goToHistory(){
				this.$tab.navigateTo(`/pages/ChatHistory`);
			}
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: marginTop;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
  
  .question-modules {
       display: flex;
       flex-direction: column;
       width: 100%;
  }
   
  .module {
       display: flex;
	   width: 100%;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       margin-bottom: 20rpx;
       border: 1px solid #00ffff; 
	   background: #00ffff;
       border-radius: 10px; 
       padding: 40rpx;
       cursor: pointer;
       color: #000;  
  }
</style>
