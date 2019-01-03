<template>
  <router-link :to="to" activeClass="active" class="button toggle">
    <i :class="'far fa-'+icon"></i> {{label}}
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FeatureButton extends Vue {
  @Prop()
  private label!: string;
  @Prop()
  private to!: string;
  @Prop()
  private icon!: string;
}
</script>

<style src="./button.css">
</style>
