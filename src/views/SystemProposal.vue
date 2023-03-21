<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-tabs
        pills
        class="mt-1"
      >
        <b-tab
          disabled
        />
        <b-tab
          title="Rule"
          active
          @click="switchRule"
        />
        <b-tab
          title="Binding"
          @click="switchBinding"
        />
        <b-tab
          title="Register"
          @click="switchRegister"
        />
        <b-tab
          title="Relation"
          @click="switchRelation"
        />
      </b-tabs>
    </b-card>
    <b-form>
      <template>
        <!-- Title -->
        <b-row>
          <b-col>
            <b-form-group
              label="Proposal Title"
              label-for="Title"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="title"
              >
                <b-form-input
                  id="Title"
                  v-model="title"
                  trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- Description -->
        <b-row>
          <b-col>
            <b-form-group
              label="Proposal Description"
              label-for="Description"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="description"
              >
                <b-form-input
                  id="Description"
                  v-model="description"
                  trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- Amount -->
        <b-row>
          <b-col>
            <b-form-group
              label="Deposit Amount"
              label-for="Amount"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required|regex:^([0-9\.]+)$"
                name="amount"
              >
                <b-input-group class="mb-25">
                  <b-form-input
                    id="Amount"
                    v-model="amount"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Input a number"
                    type="number"
                  />
                  <b-input-group-append is-text>
                    {{ printDenom() }}
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Available Token"
              label-for="Token"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Token"
              >
                <b-form-select
                  v-model="token"
                >
                  <b-form-select-option
                    v-for="item in balanceOptions"
                    :key="item.denom"
                    :value="item.denom"
                  >
                    {{ format(item) }}
                  </b-form-select-option>
                </b-form-select>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </template>

      <!-- rule -->
      <template v-if="tag === `rule`">
        <b-row>
          <b-col>
            <b-form-group
              label="Rule Name"
              label-for="RuleName"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ruleName"
              >
                <b-form-input
                  id="RuleName"
                  v-model="ruleName"
                  trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Rule Content"
              label-for="RuleContent"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ruleContent"
              >
                <b-form-input
                  id="RuleContent"
                  v-model="ruleContent"
                  trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Rule Hash"
              label-for="RuleHash"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ruleHash"
              >
                <b-form-input
                  id="RuleHash"
                  v-model="ruleHash"
                  trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </template>
      <!-- binding -->
      <template v-if="tag === `binding`">
        <b-row>
          <b-col>
            <b-form-group
                label="Binding Name"
                label-for="BindingName"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="bindingName"
              >
                <b-form-input
                    id="BindingName"
                    v-model="bindingName"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Binding Content"
                label-for="BindingContent"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="bindingContent"
              >
                <b-form-input
                    id="BindingContent"
                    v-model="bindingContent"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Rule Files Names (please separate with ',')"
                label-for="RuleFilesNames"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="ruleFilesNames"
              >
                <b-form-input
                    id="RuleFilesNames"
                    v-model="ruleFilesNames"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Binding Hash"
                label-for="BindingHash"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="bindingHash"
              >
                <b-form-input
                    id="BindingHash"
                    v-model="bindingHash"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </template>
      <!-- register -->
      <template v-if="tag === `register`">
        <b-row>
          <b-col>
            <b-form-group
                label="Regulatory Service Name"
                label-for="RegulatoryServiceName"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="regulatoryServiceName"
              >
                <b-form-input
                    id="RegulatoryServiceName"
                    v-model="regulatoryServiceName"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Regulatory Service Ip Address"
                label-for="RegulatoryServiceIpAddress"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="regulatoryServiceIpAddress"
              >
                <b-form-input
                    id="regulatoryServiceIpAddress"
                    v-model="regulatoryServiceIpAddress"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Regulatory Service Port"
                label-for="RegulatoryServicePort"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required|regex:^([0-9\.]+)$"
                  name="regulatoryServicePort"
              >
                <b-form-input
                    id="RegulatoryServicePort"
                    v-model="regulatoryServicePort"
                    type="number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </template>
      <!-- relation -->
      <template v-if="tag === `relation`">
        <b-row>
          <b-col>
            <b-form-group
                label="Relation Contract Address"
                label-for="RelationContractAddress"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="relationContractAddress"
              >
                <b-form-input
                    id="RelationContractAddress"
                    v-model="relationContractAddress"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                label="Relation Binding Name"
                label-for="RelationBindingName"
            >
              <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="relationBindingName"
              >
                <b-form-input
                    id="RelationBindingName"
                    v-model="relationBindingName"
                    trim
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </template>
    </b-form>

    <b-button
      variant="primary"
      class="btn float-right mg-2 mr-1"
      @click="handleSubmit(tag)"
    >
      Submit
    </b-button>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import {
  BForm,
  BButton,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  VBTooltip,
  BTab,
  BTabs,
  BInputGroup,
  BFormInput,
  BFormGroup,
  BFormSelect,
  BFormSelectOption, BInputGroupAppend, BRow, BCol,
} from 'bootstrap-vue'
import {
  alpha, alphaDash,
  between,
  digits,
  email,
  integer, length,
  min,
  password,
  required,
  url,
} from '@core/utils/validations/validations'
import {
  sign,
  setLocalTxHistory,
  formatToken,
  formatTokenDenom,
  getUnitAmount,
  timeIn,
  getLocalAccounts,
  extractAccountNumberAndSequence,
} from '@/libs/utils'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BTab,
    BTabs,
    BCard,
    BTable,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BInputGroup,
    BForm,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BFormSelectOption,
    vSelect,
    BInputGroupAppend,
    ValidationProvider,
  },
  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
  },
  props: {
    validatorAddress: {
      type: String,
      default: null,
    },
    // address: {
    //   type: String,
    //   default: null,
    // },
    selectedChainName: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      tag: 'rule',
      address: '',
      token: '',
      chainId: '',

      title: '',
      description: '',
      amount: null,
      ruleName: '',
      ruleContent: '',
      ruleHash: '',
      bindingName: '',
      bindingContent: '',
      ruleFilesNames: '',
      ruleFilesNamesArr: [],
      bindingHash: '',
      regulatoryServiceName: '',
      regulatoryServiceIpAddress: '',
      regulatoryServicePort: null,
      relationContractAddress: '',
      relationBindingName: '',

      fee: '900',
      feeDenom: '',
      wallet: 'keplr',
      gas: '250000',
      memo: '',

      balance: [],
      sequence: 1,
      accountNumber: 0,
      historyName: '',

      required,
      password,
      email,
      min,
      integer,
      url,
      alpha,
      between,
      digits,
      length,
      alphaDash,
    }
  },

  computed: {
    msg() {
      return [{
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: {
          proposer: this.address,
          content: {
            title: this.title,
            description: this.description,
            rule: {
              ruleName: this.ruleName,
              content: this.ruleContent,
              hash: this.ruleHash,
            },
          },
          initialDeposit: {
            amount: getUnitAmount(this.amount, this.token),
            denom: this.token,
          },
        },
      }]
    },
    accounts() {
      const accounts = getLocalAccounts()
      const selectedWallet = this.$store.state.chains.defaultWallet
      return accounts ? accounts[selectedWallet] : null
    },
    isOwner() {
      if (this.accounts) {
        this.updateWallet(this.accounts.device)
        if (this.accounts.address.findIndex(x => x.addr === this.selectedAddress) > -1) {
          return true
        }
      }
      return false
    },
    selectedAddress() {
      if (this.address) {
        return this.address
      }
      if (this.accounts) {
        const chain = this.$store.state.chains.selected.chain_name
        const selectedAddress = this.accounts?.address.find(x => x.chain === chain)
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.address = selectedAddress.addr
        return selectedAddress?.addr
      }
      return null
    },
    selectedChain() {
      let config = null
      const allChains = localStorage.getItem('chains')
      if (allChains && this.selectedChainName) {
        config = JSON.parse(allChains)[this.selectedChainName]
      }
      return config
    },
    balanceOptions() {
      return this.setupBalance()
    },
    IBCDenom() {
      return this.$store.state.chains.denoms
    },
  },
  created() {
    if (this.isOwner && this.selectedAddress) {
      this.$http.getLatestBlock().then(ret => {
        this.chainId = ret.block.header.chain_id
        const notSynced = timeIn(ret.block.header.time, 10, 'm')
        if (notSynced) {
          this.error = 'Client is not synced or blockchain is halted'
        } else {
          this.error = null
        }
      })
      this.$http.getAuthAccount(this.selectedAddress).then(ret => {
        const account = extractAccountNumberAndSequence(ret)
        this.accountNumber = account.accountNumber
        this.sequence = account.sequence
      })
      this.$http.getBankBalances(this.selectedAddress, this.selectedChain).then(res => {
        if (res.balances && res.balances.length > 0) {
          this.balance = res.balances.reverse()
          const token = this.balance.find(i => !i.denom.startsWith('ibc'))
          this.token = token.denom
          if (token) this.feeDenom = token.denom
        }
      })
      this.fee = this.$store.state.chains.selected?.min_tx_fee || '1000'
      this.feeDenom = this.$store.state.chains.selected?.assets[0]?.base || ''
    }
  },
  methods: {
    switchRule() {
      this.tag = 'rule'
    },
    switchBinding() {
      this.tag = 'binding'
    },
    switchRegister() {
      this.tag = 'register'
    },
    switchRelation() {
      this.tag = 'relation'
    },
    handleSubmit(tag) {
      debugger
      console.log('11111111111111')
      if (!this.title) {
        this.error = 'title is required'
        return
      } if (!this.description) {
        this.error = 'description is required'
        return
      } if (!this.amount) {
        this.error = 'deposit amount is required'
        return
      }

      if (tag === 'rule') {
        if (!this.ruleName) {
          this.error = 'rule name is required'
          return
        } if (!this.ruleContent) {
          this.error = 'rule content is required'
          return
        } if (!this.ruleHash) {
          this.error = 'rule hash is required'
          return
        }
      }
      // this.sendTx()
      this.sendTx().then(ret => {
        this.error = ret
      })
    },

    async sendTx() {
    // sendTx() {
      const txMsgs = this.msg

      if (txMsgs.length === 0) {
        this.error = 'No delegation found'
        return ''
      }
      if (!this.accountNumber) {
        this.error = 'Account number should not be empty!'
        return ''
      }

      const txFee = {
        amount: [
          {
            amount: this.fee,
            denom: this.feeDenom,
          },
        ],
        gas: this.gas,
      }

      const signerData = {
        accountNumber: this.accountNumber,
        sequence: this.sequence,
        chainId: this.chainId,
      }

      sign(
        this.wallet,
        this.chainId,
        this.selectedAddress,
        txMsgs,
        txFee,
        this.memo,
        signerData,
      ).then(bodyBytes => {
        this.showResult = true
        this.$http.broadcastTx(bodyBytes, this.selectedChain).then(res => {
          this.txHash = res.tx_response.txhash
          setLocalTxHistory({
            chain: this.$store.state.chains.selected,
            op: this.historyName,
            hash: res.tx_response.txhash,
            time: new Date(),
          })
        }).catch(e => {
          this.showResult = false
          this.error = e
          this.showDismissibleAlert = true
        })
      }).catch(e => {
        this.showResult = false
        this.error = e
        this.showDismissibleAlert = true
      })
      return ''
    },

    setupBalance() {
      if (this.balance && this.balance.length > 0) {
        this.token = this.balance[0].denom
        return this.balance
      }
      return []
    },
    format(v) {
      return formatToken(v, this.IBCDenom, 6)
    },
    printDenom() {
      return formatTokenDenom(this.IBCDenom[this.token] || this.token)
    },
    updateWallet(v) {
      if (v && v === 'address') {
        this.wallet = 'keplr'
      } else {
        this.wallet = v
      }
    },
  },
}
</script>
