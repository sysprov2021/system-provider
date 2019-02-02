import Vue from 'vue'
import Content from '../components/content.vue'
import graph from '../static/graph.json'

Vue.component('Content', Content)
global.$graph = graph
