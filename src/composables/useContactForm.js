import { reactive, ref } from 'vue'

export function useContactForm() {
  const form = reactive({ title: '', link: '', note: '' })
  const submitting = ref(false)

  async function submit() {
    if (!form.title && !form.link && !form.note) {
      return { success: false, error: 'empty' }
    }

    submitting.value = true
    try {
      // Placeholder for API integration. Replace with fetch/axios call.
      await new Promise((r) => setTimeout(r, 600))
      // example payload
      const payload = { title: form.title, link: form.link, note: form.note }
      console.log('Contact submit payload:', payload)

      // Reset form
      form.title = ''
      form.link = ''
      form.note = ''

      return { success: true }
    } catch (err) {
      console.error(err)
      return { success: false, error: err }
    } finally {
      submitting.value = false
    }
  }

  return { form, submitting, submit }
}
