<template>
  <div>
    <Hero />

    <FadeIn>
      <Section id="sobre" title="Sobre mim">
        <p class="max-w-3xl text-content-muted">
          Prazer, me chamo Gabriel Soares e sou desenvolvedor de software. Este
          portfólio reúne um pouco da minha trajetória, projetos e experiências na
          área de tecnologia. Trabalho com Vue.js e Nuxt no desenvolvimento de
          interfaces modernas, focadas em UX, UI e performance, além de integrar
          APIs e banco de dados para criar aplicações completas e bem
          estruturadas. Aqui você encontrará um pouco do meu trabalho, das minhas
          habilidades e da forma como gosto de transformar ideias em produtos
          digitais. Tenha uma ótima leitura.
        </p>
      </Section>
    </FadeIn>

    <FadeIn>
      <Section id="experiencia" title="Experiência">
        <Card title="Antunes Filho Holding" subtitle="Auxiliar de TI">
          <ul class="space-y-3 text-sm text-content-muted">
            <li>• Sistema financeiro, administrativo e comercial</li>
            <li>• Desenvolvimento de sites e Landing Pages</li>
            <li>• Integração e manutenção do banco de dados</li>
            <li>• Integração com APIs de pagamentos, cobranças e assinatura digital</li>
            <li>• Suporte em Hardware, Software e Redes</li>
          </ul>
        </Card>
      </Section>
    </FadeIn>

    <FadeIn>
      <Section id="formacao" title="Educação">
        <div class="space-y-10 border-l border-primary/20 pl-8">
          <div>
            <h3 class="text-lg font-semibold text-content">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <p class="text-sm text-primary">Universidade Paulista (UNIP)</p>
            <p class="text-sm text-content-muted">Janeiro de 2025 — Atual</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-content">
              Técnico em Tecnologia da Informação
            </h3>
            <p class="text-sm text-primary">Instituto Ideia</p>
            <p class="text-sm text-content-muted">Janeiro de 2021 — Dezembro de 2024</p>
          </div>
        </div>
      </Section>
    </FadeIn>

    <FadeIn>
      <Section id="projetos" title="Projetos">
        <div class="grid gap-6 md:grid-cols-2">
          <Card title="Sistema de Caixa e Estoque" subtitle="Sistema Corporativo">
            Plataforma para loja de tecidos com controle de estoque inteligente,
            caixa e relatórios.
          </Card>
          <Card title="Sistema de Aluguel de Equipamentos" subtitle="Web + Automação">
            Controle de barracas e equipamentos com check-in, checkout e
            integração com WhatsApp.
          </Card>
          <a href="https://github.com/GabrielSoarex/SOS-My-House" target="_blank" rel="noopener noreferrer" class="block transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
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
    </FadeIn>

    <FadeIn>
      <Section id="habilidades" title="Habilidades">
        <div class="space-y-6">
          <div>
            <h3 class="mb-4 text-primary">Idiomas</h3>
            <div class="flex flex-wrap gap-3">
              <span class="chip">Português</span>
              <span class="chip">Inglês (Básico)</span>
            </div>
          </div>
          <div>
            <h3 class="mb-4 text-primary">Backend</h3>
            <div class="flex flex-wrap gap-3">
              <span class="chip">Java</span>
              <span class="chip">Spring</span>
              <span class="chip">SQL</span>
            </div>
          </div>
          <div>
            <h3 class="mb-4 text-primary">Frontend</h3>
            <div class="flex flex-wrap gap-3">
              <span class="chip">Vue.js</span>
              <span class="chip">Nuxt.js</span>
              <span class="chip">JavaScript</span>
              <span class="chip">HTML</span>
              <span class="chip">CSS</span>
            </div>
          </div>
          <div>
            <h3 class="mb-4 text-primary">Outros</h3>
            <div class="flex flex-wrap gap-3">
              <span class="chip">Git</span>
              <span class="chip">Arquitetura de Software</span>
            </div>
          </div>
        </div>
      </Section>
    </FadeIn>

    <FadeIn>
      <Section id="cursosecertificados" title="Cursos e Certificados">
        <div class="space-y-6">
          <Card title="Acessibilidade em UX/UI" subtitle="Alura — Jan 2026" />
          <Card title="JavaScript – Programação Orientada a Objetos" subtitle="Alura — Jan 2026" />
        </div>
      </Section>
    </FadeIn>

    <FadeIn>
      <Section id="construido-com" title="Construído com">
        <p class="mb-6 max-w-2xl text-content-muted">
          Este portfólio foi desenvolvido com as tecnologias que utilizo no dia a dia.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="tech-badge">Nuxt</span>
          <span class="tech-badge">Vue 3</span>
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">Tailwind CSS</span>
          <span class="tech-badge">VueUse</span>
          <span class="tech-badge">Vite</span>
        </div>
      </Section>
    </FadeIn>
  </div>
</template>

<style scoped>
.chip {
  @apply rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary backdrop-blur transition hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface;
}
.tech-badge {
  @apply rounded-lg border border-content/15 bg-surface-elevated/80 px-4 py-2 text-sm font-medium text-content-muted;
}
</style>
