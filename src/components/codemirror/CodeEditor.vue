<template>
	<Codemirror
			v-model:value="code"
			:options="cmOptions"
			border
			placeholder="test placeholder"
			:height="300"
			@change="onChange"
	/>
</template>

<script setup>
import { reactive, ref } from "vue"
import Codemirror from 'codemirror-editor-vue3'

// language
// import 'codemirror/mode/javascript/javascript.js'

// theme
// import 'codemirror/theme/dracula.css'

const code = ref(`/* C */
printf("Hello World!");

/* C++ */
cout << "Hello World!" << endl;

/* Java */
System.out.println("Hello, world!");

/* Python */
print("Hello World!")

/* JavaScript */
console.log('Hello World!')`)

const cmOptions = reactive({
	mode: "text/javascript", // 语言模式
	theme: "default", // 主题
	lineNumbers: true, // 显示行号
	smartIndent: true, // 智能缩进
	indentUnit: 2, // 智能缩进单位为4个空格长度
	foldGutter: true, // 启用行槽中的代码折叠
	styleActiveLine: true, // 显示选中行的样式
})

const onChange = (val, cm) => {}
</script>