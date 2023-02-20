<template>
    <div class="p-5">
      <div>
        <h1 class="font-bold leading-tight text-3xl text-center">Kirim Menfess</h1>
      </div>
      <div class="text-center mt-10">
        <div class="text-left p-5 bg-gray-100 bordered rounded-lg mt-4 max-w-screen-sm m-auto">
        <div class="font-bold text-lg text-center mb-2">Rules</div>
          <ol>
            <li class="text-red-800">🚫 Dilarang mengirim pesan rasis, hoax atau hal-hal yang merugikan orang lain.</li>
            <li class="text-red-800">🚫 Dilarang mengunggah konten promosi tanpa izin dari pihak admin.</li>
            <li>✅ Pastikan sudah follow <a class="font-bold" rel="me" target="_blank" href="https://twitter.com/binus_fess">@binus_fess</a> di Twitter </li>
            <li>✅ Aktif membantu menjawab menfess!</li>
          </ol>
        </div>
        <div class="max-w-screen-sm m-auto text-center mt-3"></div>
        <form @submit.prevent="handleSubmit">
        <div class="text-center p-5 bg-gray-100 bordered rounded-lg mt-4 max-w-screen-sm m-auto">

          <label for="message">Pesan:</label>
          <textarea :disabled="isLoading" id="message" rows="7" max="300" v-model="message" placeholder="Contoh: SAT dari FYP kapan keluarnya ya?" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" required></textarea>
          <div class="text-xs text-gray-400  mb-4 mt-1">Tidak perlu menggunakan kata kunci/trigger.</div>

          <label for="topic">Pilih Topik:</label>
          <select :disabled="isLoading" id="topic" v-model="topic" v-bind:options="options" class="border rounded-lg px-4 py-2 mt-2 w-full" required>
            <option v-for="option in options" :key="option.value" :value="option.value" :selected="option.selected" :disabled="option.disabled">
              {{ option.text }}
            </option>
          </select>

        </div>
        <div class="text-center text-sm italic mt-4 text-gray-500"> Waktu tunggu: langsung dikirim </div>

        <div class="mt-5 text-center">
          <input :disabled="isLoading" type="submit" :value="isLoading ? 'Loading...' : 'Kirim Menfess'" class="btn bg-pink-800 text-white cursor-pointer py-4 px-6 text-lg font-bold inline-block rounded-lg m-auto hover:bg-white hover:text-gray-900 border border-transparent hover:border-gray-500">
        </div>

        </form>
      </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig();
    let topic = ref("");
    let message = ref("");
    let isLoading = ref(false);
    const options = [
        { text: "- Pilih Topik -", value: "", selected: true, disabled: true },
        { text: "BINUS - Semua yang berkaitan dengan binus", value: "binus" },
        { text: "Struggle - Ceritakan semua permasalahanmu atau kesulitanmu", value: "struggle" },
        { text: "OOT - Topik yang tidak relevan", value: "oot" },
    ]
    const swal = inject("$swal");

    async function handleSubmit() {
      const menfessTopic = topic.value;
      const menfessMessage = message.value;
      const menfess = {
        tweetTopic: menfessTopic,
        tweetText: menfessMessage,
      };
      try {
        isLoading.value = true;
        const response = await fetch(`${config.public.api_binusfess}/api/v1/tweets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(menfess),
        });
        const data = await response.json();
        if (data.status === true) {
          swal.fire({
              title: data.message,
              icon: 'success',
          });
          topic.value = "";
          message.value = "";
          isLoading.value = false;
          return;
        } else {
          swal.fire({
              title: data.message,
              icon: 'error',
          });
          isLoading.value = false;
          return;
        }
      } catch (err) {
          swal.fire({
              title: err.message,
              icon: 'error',
          });
        isLoading.value = false;
        return;
      }
    }
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>