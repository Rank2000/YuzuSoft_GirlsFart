<script setup>
import RankItem from './components/RankItem.vue'
import { useGirlsStore } from '@/stores'

const girlsStore = useGirlsStore()
</script>

<template>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(77, 50, 10)"
    title="T0"
    rank="T0"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(108, 71, 16)"
    title="T0.5"
    rank="T0.5"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(125, 81, 16)"
    title="T1"
    rank="T1"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(176, 119, 35)"
    title="T1.5"
    rank="T1.5"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(217, 159, 71)"
    title="T2"
    rank="T2"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(223, 201, 38)"
    title="T2.5"
    rank="T2.5"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(240, 218, 51)"
    title="T3"
    rank="T3"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(248, 245, 89)"
    title="T3.5"
    rank="T3.5"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(182, 227, 75)"
    title="T4"
    rank="T4"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="greenyellow"
    title="T4.5"
    rank="T4.5"
    rule="poop_count"
  ></RankItem>
  <RankItem
    :girlsInfo="girlsStore.girlsData"
    bgColor="rgb(101, 251, 197)"
    title="T5"
    rank="T5"
    rule="poop_count"
  ></RankItem>
</template>
