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
    <!-- 输入区域 -->
    <div class="input-area">
      <textarea class="tx" v-model="inputText" placeholder="请输入消息的内容" rows="2"></textarea>
       <!-- 发送按钮，点击时调用 sendMessage 方法 -->
      <button class="sendbotton" @click="sendMessage">发送</button> 
			  </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // 包含所有消息的数组
      messages: [
        // 初始化一些消息
      ],
      // 输入框的值
      inputText: '',
			socket: null  // WebSocket连接
    };
  },
	created() {
	    this.initWebSocket()  // 初始化WebSocket连接
	},
	beforeDestroy() {
	    if (this.socket) {
	      this.socket.close()  // 如果WebSocket连接存在，那么在组件销毁前关闭连接
	    }
	},
  methods: {
    sendMessage() {
			if (this.inputText.trim() !== '') {
			  // 将新消息添加到消息数组中
			  this.messages.push({
			     id: Date.now(),  // 使用当前时间戳作为 id
			     text: this.inputText,  // 消息文本
			     timestamp: new Date().toLocaleTimeString('zh-CN',{
			  				 year:'numeric',
			  				 month:'2-digit',
			  				 day:'2-digit',
			  				 hour:'numeric',
			  				 minute:'2-digit',
			  				 second:'2-digit'
			  }),  // 消息时间戳
			     sent: true 
			   });
			  // 清空输入框
			  this.inputText = ''
				this.socket.send(JSON.stringify(message))  // 通过WebSocket连接发送消息
      }
    },
		initWebSocket() {
		  this.socket = new WebSocket('ws://xx/updateengineering')  // 创建一个新的WebSocket连接
		  this.socket.onmessage = (event) => {  // 监听服务器发送的消息
				const message = JSON.parse(event.data)  // 将服务器发送的消息从JSON格式解析为JavaScript对象
				if (message.id !== this.messages[this.messages.length - 1].id) {  // 如果这条消息的id与最后一条已接收的消息的id不同
		      this.messages.push(message)  // 那么就将这条消息添加到messages数组中
				}
			}
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

/* 输入区域的样式 */
.input-area {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color:pink;
	height: 70px;
}

/* 输入框的样式 */
.tx{
	outline: none;
	border-color: transparent;
	resize: none;
	background: #f5f5f5;
	border-radius: 4px;
	flex: 1;
	margin-right: 10px;
	padding: 10px;
	transition: all 0.5s;
	height: 60px;
}

.placeholder{
	margin-top: 20px;
}

.sendbotton{
	margin-right: 15px;
	border-radius:10px;
	background-color: #0084ff;
	height: 60px;
}
</style>
