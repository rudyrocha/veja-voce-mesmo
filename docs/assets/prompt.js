'use strict';
const question = document.getElementById('question');
const field = document.getElementById('prompt-text');
const status = document.getElementById('copy-status');
const copy = document.getElementById('copy-prompt');
const template = field.value;
function updatePrompt() {
  const topic = question.value.trim();
  field.value = template.replace('[ESCREVA AQUI O QUE VOCÊ QUER INVESTIGAR]', topic || '[ESCREVA AQUI O QUE VOCÊ QUER INVESTIGAR]');
  copy.disabled = !topic;
  status.textContent = '';
}
question.addEventListener('input', updatePrompt);
document.querySelectorAll('[data-question]').forEach(button => {
  button.addEventListener('click', () => {
    question.value = button.dataset.question;
    updatePrompt();
    question.focus();
  });
});
copy.addEventListener('click', async () => {
  const text = field.value;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      field.focus(); field.select();
      if (!document.execCommand('copy')) throw new Error('copy failed');
    }
    status.textContent = 'Prompt completo copiado. Cole na IA de sua preferência e habilite a pesquisa na internet.';
  } catch {
    field.focus(); field.select();
    status.textContent = 'A cópia automática não funcionou. O prompt está selecionado: use Copiar no seu dispositivo.';
  }
});
updatePrompt();
