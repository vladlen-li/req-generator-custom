<script>

   import { copyTextToClipboard } from '../utils/copyToClipboard'
   import Textfield from '@smui/textfield'
   import IconButton from '@smui/icon-button'
   import Select, { Option } from '@smui/select'
   import Store from '../utils/Store'
   import History from './history.svelte'
   import { bankCodes, generateKazakhstanIban } from '../utils/generateIbanKz'

   let value = Store.getValue('IBAN')
   let id = 0

   export const generate = () => generateKazakhstanIban(id)

   const generateAndCopy = () => {
     const generatedValue = generate()
     copyTextToClipboard(generatedValue)
     value = generatedValue
     return generatedValue
   }
</script>

<div class="form-group">
   <Textfield type="text" bind:value={value} label="IBAN" />
   <Select bind:value={id} label="Код банка:" class="select" displayEmpty={false}>
      {#each Object.entries(bankCodes) as [key, value]}
         <Option value={key}>{value}</Option>
      {/each}
   </Select>

   <div class="form-group__actions">
      <IconButton
         class="material-icons"
         title="Generate"
         on:click={() => generateAndCopy(id)}
      >
         play_circle_outline
      </IconButton>
      <IconButton
         class="material-icons"
         title="Copy"
         on:click={() => copyTextToClipboard(value)}
      >
         content_copy
      </IconButton>
      <History label="IBAN" reqId="IBAN" />
   </div>
</div>
