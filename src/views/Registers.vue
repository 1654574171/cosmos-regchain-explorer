<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-table
        :items="registers"
        :fields="list_fields"
        :sort-desc="true"
        sort-by="tokens"
        striped
        hover
        stacked="sm"
      >
        <template #cell(regulatoryServiceName)="data">
<!--          <router-link :to="`./registers/${data.item.registerName}`">-->
            <small>{{ data.item.regulatoryServiceName }}</small>
<!--          </router-link>-->
        </template>
        <template #cell(iasAttestatioReport)="data">
          <small>{{ data.item.iasAttestatioReport }}</small>
        </template>
        <template #cell(enclavePK)="data">
          <small>{{ data.item.enclavePK }}</small>
        </template>
        <template #cell(endpoint)="data">
          <small>{{ data.item.endpoint }}</small>
        </template>

      </b-table>
    </b-card>
  </div>
</template>

<script>
import {
  BTable, BCard, BCardHeader, BCardTitle, VBTooltip,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BTable,
    BCardHeader,
    BCardTitle,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      registers: [],
      list_fields: [
        {
          key: 'regulatoryServiceName',
        },
        {
          key: 'iasAttestatioReport',
        },
        {
          key: 'enclavePK',
        },
        {
          key: 'endpoint',
        },
      ],
    }
  },
  created() {
    this.$http.getRegisterList().then(res => {
      this.registers = res
    })
  },
  methods: {
    length: v => (Array.isArray(v) ? v.length : 0),
  },
}
</script>
