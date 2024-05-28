<template>
  <div class="chat-container">
    <!-- 遍历所有消息 -->
    <div v-for="message in messages" :key="message.id" :class="message.sent ? 'message sent' : 'message received'">
      <!-- 消息气泡 -->
      <div class="bubble">
        <!-- 消息文本 -->
        <div class="text">{{ message.text }}</div>
        <!-- 消息时间戳 -->
        <div class="timestamp">{{ message.timestamp }}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getEngineeringRecords } from '@/api/home/chat';
export default {
  data() {
    return {
      // 包含所有消息的数组
       messages: [{text : 123,id:1716294699490,timestamp:new Date().toLocaleTimeString('zh-CN',{
				 year:'numeric',
				 month:'2-digit',
				 day:'2-digit',
				 hour:'numeric',
				 minute:'2-digit',
				 second:'2-digit'
			 }),sent:false}
        // 初始化一些消息
      ],
    };
  },
	created() {
	    this.fetchEngineeringRecords()
	  },
  methods: {
		 fetchEngineeringRecords() {
		       getEngineeringRecords().then(response => {
		         this.messages = response.data
		       }).catch(error => {
		         console.error('Failed ', error)
		       })
		     }
		  }
  }
</script>

<style scoped>
/* 所有消息的样式 */
.message {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

/* 发送的消息的样式 */
.message.sent {
  justify-content: flex-end;
}

/* 消息气泡的样式 */
.bubble {
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* 接收的消息的气泡样式 */
.message.received .bubble {
  background-color: #00ff7f;
	color:white;
	margin-left: 15px;
}

/* 发送的消息的气泡样式 */
.message.sent .bubble {
  background-color: #0084ff;
  color: white;
	margin-right: 15px;
}

/* 时间戳的样式 */
.timestamp {
  font-size: 0.8em;
  text-align: right;
  color: #ffff7f;
}
</style>
