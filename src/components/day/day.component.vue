<style lang="scss" src="./day.component.scss" module/>

<template>
  <div :class="dayContainerClasses">
    <div :class="$style['header']">
      <span :class="$style['day-number']">
              {{ day.getDayNumber() }}
      </span>
      <div :class="$style['add-button']">
        +
      </div>
    </div>
    <div :class="$style['body']">
      <span v-if="!day.hasEvents()"
            :class="$style['no-events-text']">
        {{ 'no events' }}
      </span>
      <DayEventComponent v-else-if="day.getEvents()"
                         :class="$style['day-event']"
                         v-for="dayEvent in day.getEvents()"
                         :key="dayEvent.name"
                         :dayEvent="dayEvent"/>
    </div>
  </div>
</template>

<script lang="ts" src="./day.component.ts"/>
