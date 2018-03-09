<style>
    #talking {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between
    }
    .talkSth {
        width: 100%;
    }
    .writeSth {
        width: 100%;
    }
</style>

<template>
    <div id="talking">
        <ul class="talkSth">
            <li v-for="about in talkAbout">
                {{about}}
            </li>
        </ul>
        <div class="writeSth">
            <div>
                <input type="text" plcaeholder="say sth" v-model="saySth">
                <button @click="spend">send</button>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://192.168.10.169:3000');

export default {
    name: 'talking',
    data() {
        return {
            talkAbout: [],
            saySth: ''
        }
    },
    methods: {
        spend(){
            socket.emit('chat message', this.saySth);
            this.saySth = '';
        }
    },
    mounted(){
        socket.on('chat message', (msg)=>{
            this.talkAbout.push(msg);
        });
    }
}
</script>

