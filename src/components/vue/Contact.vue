<template>
  <section class="py-20 bg-base-200" id="contact">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Contact</h2>
        <div class="w-20 h-1 bg-pink mx-auto rounded mb-8"></div>
        <p class="text-lg text-base-content/70">
          Intéressé par une collaboration ? N'hésitez pas à me contacter !
        </p>
      </div>

      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Restons en contact</h3>
            <p class="text-base-content/70 mb-8">
              Je suis toujours ouverte aux nouvelles opportunités et aux projets intéressants. 
              Que ce soit pour du développement backend ou de l'analyse de données, discutons !
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Email</p>
                <p class="text-base-content/70">6nemarik@gmail.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Localisation</p>
                <p class="text-base-content/70">Paris, France</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-pink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/sinem-arik-2a9234215/" class="text-primary hover:underline">Sinem Arik</a>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <h4 class="font-semibold mb-4">Disponibilité</h4>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span class="text-sm">Disponible pour de nouveaux projets</span>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <div class="bg-base-100 p-8 rounded-lg shadow-sm">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="label">
                <span class="label-text font-medium">Nom *</span>
              </label>
              <input 
                type="text" 
                v-model="form.name"
                class="input input-bordered w-full"
                :class="{ 'input-error': errors.name }"
                placeholder="Votre nom"
                required
              />
              <span v-if="errors.name" class="text-error text-sm">{{ errors.name }}</span>
            </div>

            <div>
              <label class="label">
                <span class="label-text font-medium">Email *</span>
              </label>
              <input 
                type="email" 
                v-model="form.email"
                class="input input-bordered w-full"
                :class="{ 'input-error': errors.email }"
                placeholder="votre.email@exemple.com"
                required
              />
              <span v-if="errors.email" class="text-error text-sm">{{ errors.email }}</span>
            </div>

            <div>
              <label class="label">
                <span class="label-text font-medium">Sujet</span>
              </label>
              <select 
                v-model="form.subject" 
                class="select select-bordered w-full"
              >
                <option value="">Choisir un sujet</option>
                <option value="collaboration">Opportunité de collaboration</option>
                <option value="freelance">Mission freelance</option>
                <option value="job">Opportunité d'emploi</option>
                <option value="project">Discussion projet</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label class="label">
                <span class="label-text font-medium">Message *</span>
              </label>
              <textarea 
                v-model="form.message"
                class="textarea textarea-bordered w-full h-32"
                :class="{ 'textarea-error': errors.message }"
                placeholder="Décrivez votre projet ou votre demande..."
                required
              ></textarea>
              <span v-if="errors.message" class="text-error text-sm">{{ errors.message }}</span>
            </div>

            <button 
              type="submit" 
              class="btn btn-pink w-full"
              :class="{ 'loading': isSubmitting }"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else>Envoi en cours...</span>
            </button>

            <div v-if="submitMessage" 
                 class="alert"
                 :class="submitSuccess ? 'alert-success' : 'alert-error'"
            >
              <svg v-if="submitSuccess" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ submitMessage }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {};
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Le nom est requis';
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'L\'email est requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Format d\'email invalide';
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Le message est requis';
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Le message doit contenir au moins 10 caractères';
      }
      
      return Object.keys(this.errors).length === 0;
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      this.submitMessage = '';
      
      try {
        // Envoi via Formspree
        const response = await fetch('https://formspree.io/f/mdkwvonn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject || 'Contact depuis le portfolio',
            message: this.form.message,
            _replyto: this.form.email
          })
        });
        
        if (response.ok) {
          this.submitSuccess = true;
          this.submitMessage = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
          
          // Reset form
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          // Masquer le message après 5 secondes
          setTimeout(() => {
            this.submitMessage = '';
          }, 5000);
        } else {
          throw new Error('Erreur lors de l\'envoi');
        }
        
      } catch (error) {
        this.submitSuccess = false;
        this.submitMessage = 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.';
        console.error('Erreur:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>