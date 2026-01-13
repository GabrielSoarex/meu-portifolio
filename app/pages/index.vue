<template>
  <div>
    <Hero />

    <Section id="sobre" title="Sobre mim">
      <p class="text-gray-400 max-w-3xl">
        Prazer, me chamo Gabriel Soares e sou desenvolvedor de software. Este
        portfólio reúne um pouco da minha trajetória, projetos e experiências na
        área de tecnologia. Trabalho com Vue.js e Nuxt no desenvolvimento de
        interfaces modernas, focadas em UX, UI e performance, além de integrar
        APIs e banco de dados para criar aplicações completas e bem
        estruturadas. Aqui você encontrará um pouco do meu trabalho, das minhas
        habilidades e da forma como gosto de transformar ideias em produtos
        digitais. Tenha uma ótima leitura.
      </p></Section
    >

    <Section id="experiencia" title="Experiência">
      <Card title="Antunes Filho Holding" subtitle="Auxiliar de TI">
        <ul class="space-y-3 text-gray-400 text-sm">
          <li>• Sistema financeiro, administrativo e comercial</li>
          <li>• Desenvolvimento de sites e Landing Pages</li>
          <li>• Integração e manutenção do banco de dados</li>
          <li>
            • Integração com APIs de pagamentos, cobranças e assinatura digital
          </li>
          <li>• Suporte em Hardware, Software e Redes</li>
        </ul>
      </Card>
    </Section>

    <Section id="formacao" title="Educação">
      <div class="space-y-10 border-l border-blue-500/20 pl-8">
        <div>
          <h3 class="font-semibold text-lg">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <p class="text-blue-400 text-sm">Universidade Paulista (UNIP)</p>
          <p class="text-gray-400 text-sm">Janeiro de 2025 — Atual</p>
        </div>

        <div>
          <h3 class="font-semibold text-lg">
            Técnico em Tecnologia da Informação
          </h3>
          <p class="text-blue-400 text-sm">Instituto Ideia</p>
          <p class="text-gray-400 text-sm">
            Janeiro de 2021 — Dezembro de 2024
          </p>
        </div>
      </div>
    </Section>

    <Section id="projetos" title="Projetos">
      <div class="grid md:grid-cols-2 gap-6">
        <Card title="Sistema de Caixa e Estoque" subtitle="Sistema Corporativo">
          Plataforma para loja de tecidos com controle de estoque inteligente,
          caixa e relatórios.
        </Card>

        <Card
          title="Sistema de Aluguel de Equipamentos"
          subtitle="Web + Automação"
        >
          Controle de barracas e equipamentos com check-in, checkout e
          integração com WhatsApp.
        </Card>
        <a
          href="https://github.com/GabrielSoarex/SOS-My-House"
          target="_blank"
          class="block"
        >
          <Card title="App de Prestação de Serviços" subtitle="Mobile + Web">
            Aplicativo tipo Uber/iFood conectando prestadores e clientes,
            desenvolvido em Dart.
          </Card>
        </a>
        <Card title="Sistema de Chamados com IA" subtitle="Suporte de TI">
          Plataforma interna para abertura de chamados de TI com apoio de
          inteligência artificial.
        </Card>
      </div>
    </Section>

    <Section id="habilidades" title="Habilidades">
      <div>
        <div>
          <h3 class="text-blue-400 mb-4">Idiomas</h3>
          <div class="flex flex-wrap gap-3">
            <span class="chip">Português</span>
            <span class="chip">Inglês (Básico)</span>
          </div>
        </div>

        <div>
          <h3 class="text-blue-400 mb-4">Backend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="chip">Java</span>
            <span class="chip">Spring</span>
            <span class="chip">SQL</span>
          </div>
        </div>

        <div>
          <h3 class="text-blue-400 mb-4">Frontend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="chip">Vue.js</span>
            <span class="chip">Nuxt.js</span>
            <span class="chip">JavaScript</span>
            <span class="chip">HTML</span>
            <span class="chip">CSS</span>
          </div>
        </div>

        <div>
          <h3 class="text-blue-400 mb-4">Outros</h3>
          <div class="flex flex-wrap gap-3">
            <span class="chip">Git</span>
            <span class="chip">Arquitetura de Software</span>
          </div>
        </div>
      </div>
    </Section>

    <Section id="cursosecertificados" title="Cursos e Certificados">
      <div class="space-y-6">
        <div
          class="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
        >
          <div
            class="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center text-black font-bold"
          >
            alura
          </div>
          <div>
            <p class="font-semibold">Acessibilidade em UX/UI</p>
            <p class="text-gray-400 text-sm">Alura — Jan 2026</p>
          </div>
        </div>

        <div
          class="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
        >
          <div
            class="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center text-black font-bold"
          >
            alura
          </div>
          <div>
            <p class="font-semibold">
              JavaScript – Programação Orientada a Objetos
            </p>
            <p class="text-gray-400 text-sm">Alura — Jan 2026</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style>
.chip {
  @apply px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur hover:bg-blue-500/20 transition;
}
</style>
