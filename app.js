const cloudSoftware = [
    {
        id: 'openstack',
        name: 'OpenStack',
        category: 'compute',
        categoryLabel: 'IaaS / Virtualización',
        description: 'La plataforma líder mundial de computación en la nube de código abierto. Controla grandes pools de procesamiento, almacenamiento y redes en todo el centro de datos.',
        tags: ['IaaS', 'Enterprise', 'Escalable'],
        url: 'https://www.openstack.org/',
        icon: '☁️'
    },
    {
        id: 'proxmox',
        name: 'Proxmox VE',
        category: 'compute',
        categoryLabel: 'Virtualización',
        description: 'Plataforma completa de gestión de virtualización empresarial de código abierto. Integra hipervisor KVM y contenedores LXC, almacenamiento y red definidos por software.',
        tags: ['KVM', 'LXC', 'HCI'],
        url: 'https://www.proxmox.com/',
        icon: '🖥️'
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'orchestration',
        categoryLabel: 'Orquestación',
        description: 'El estándar de la industria para la orquestación de contenedores. Automatiza el despliegue, escalado y gestión de aplicaciones en contenedores.',
        tags: ['Contenedores', 'CNCF', 'Escalado'],
        url: 'https://kubernetes.io/',
        icon: '☸️'
    },
    {
        id: 'okd',
        name: 'OKD (OpenShift)',
        category: 'orchestration',
        categoryLabel: 'PaaS / Orquestación',
        description: 'La distribución comunitaria de Kubernetes que impulsa Red Hat OpenShift. Optimizado para desarrollo continuo y despliegue multi-tenant.',
        tags: ['Kubernetes', 'PaaS', 'DevOps'],
        url: 'https://www.okd.io/',
        icon: '🚀'
    },
    {
        id: 'ceph',
        name: 'Ceph',
        category: 'storage',
        categoryLabel: 'Almacenamiento Distribuido',
        description: 'Sistema de almacenamiento distribuido altamente escalable. Proporciona interfaces de objetos, bloques y archivos en un único clúster unificado.',
        tags: ['Object Storage', 'Block Storage', 'Escalable'],
        url: 'https://ceph.io/',
        icon: '📦'
    },
    {
        id: 'minio',
        name: 'MinIO',
        category: 'storage',
        categoryLabel: 'Almacenamiento de Objetos',
        description: 'Almacenamiento de objetos distribuido de alto rendimiento, compatible con la API de Amazon S3. Construido para cargas de trabajo de IA y Big Data.',
        tags: ['S3 Compatible', 'Performance', 'Cloud Native'],
        url: 'https://min.io/',
        icon: '🪣'
    },
    {
        id: 'truenas',
        name: 'TrueNAS SCALE',
        category: 'storage',
        categoryLabel: 'HCI / Almacenamiento',
        description: 'Plataforma de infraestructura hiperconvergente de código abierto basada en Debian Linux y contenedores, con ZFS en su núcleo.',
        tags: ['ZFS', 'NAS', 'HCI'],
        url: 'https://www.truenas.com/truenas-scale/',
        icon: '💾'
    },
    {
        id: 'pfsense',
        name: 'pfSense / OPNsense',
        category: 'network',
        categoryLabel: 'Redes y Seguridad',
        description: 'Sistemas operativos de firewall y enrutamiento basados en FreeBSD de código abierto con una amplia variedad de funciones empresariales.',
        tags: ['Firewall', 'VPN', 'Routing'],
        url: 'https://opnsense.org/',
        icon: '🛡️'
    },
    {
        id: 'cilium',
        name: 'Cilium',
        category: 'network',
        categoryLabel: 'Redes Cloud Native',
        description: 'Software de código abierto para proporcionar, asegurar y observar la conectividad de red entre cargas de trabajo de contenedores usando eBPF.',
        tags: ['eBPF', 'Kubernetes', 'CNCF'],
        url: 'https://cilium.io/',
        icon: '🐝'
    },
    {
        id: 'prometheus',
        name: 'Prometheus & Grafana',
        category: 'observability',
        categoryLabel: 'Monitorización',
        description: 'El ecosistema estándar para monitorización de métricas en la nube y alertas, combinado con la mejor plataforma de visualización de datos.',
        tags: ['Métricas', 'CNCF', 'Dashboards'],
        url: 'https://prometheus.io/',
        icon: '📊'
    },
    {
        id: 'opentofu',
        name: 'OpenTofu',
        category: 'orchestration',
        categoryLabel: 'Infraestructura como Código',
        description: 'Herramienta de IaC de código abierto (fork de Terraform) para definir y aprovisionar la infraestructura del centro de datos usando un lenguaje de configuración.',
        tags: ['IaC', 'Terraform', 'Automatización'],
        url: 'https://opentofu.org/',
        icon: '🏗️'
    },
    {
        id: 'ansible',
        name: 'Ansible',
        category: 'orchestration',
        categoryLabel: 'Automatización',
        description: 'Sistema de automatización de TI radicalmente simple que maneja gestión de configuración, despliegue de aplicaciones y aprovisionamiento en la nube.',
        tags: ['Config Management', 'Agentless', 'DevOps'],
        url: 'https://www.ansible.com/community',
        icon: '⚙️'
    },
    {
        id: 'nextcloud',
        name: 'Nextcloud',
        category: 'productivity',
        categoryLabel: 'Almacenamiento y Suite',
        description: 'Plataforma de colaboración de contenido de código abierto. Ofrece almacenamiento de archivos, sincronización, y funciones integradas de comunicación.',
        tags: ['Drive', 'SaaS', 'Colaboración'],
        url: 'https://nextcloud.com/',
        icon: '☁️'
    },
    {
        id: 'collabora',
        name: 'Collabora Online',
        category: 'productivity',
        categoryLabel: 'Ofimática',
        description: 'Potente suite ofimática en línea basada en LibreOffice, que permite la edición colaborativa de documentos de texto, hojas de cálculo y presentaciones.',
        tags: ['Docs', 'Sheets', 'Slides'],
        url: 'https://www.collaboraoffice.com/',
        icon: '📝'
    },
    {
        id: 'jitsi',
        name: 'Jitsi Meet',
        category: 'productivity',
        categoryLabel: 'Videoconferencia',
        description: 'Solución de videoconferencia de código abierto 100% gratuita, segura, flexible y fácil de usar. Equivalente a Google Meet.',
        tags: ['Videollamadas', 'WebRTC', 'Reuniones'],
        url: 'https://jitsi.org/jitsi-meet/',
        icon: '📹'
    },
    {
        id: 'mattermost',
        name: 'Mattermost',
        category: 'productivity',
        categoryLabel: 'Chat de Equipo',
        description: 'Plataforma de colaboración y mensajería de código abierto altamente segura y escalable, alternativa a Slack, Microsoft Teams y Google Chat.',
        tags: ['Chat', 'Mensajería', 'Colaboración'],
        url: 'https://mattermost.com/',
        icon: '💬'
    },
    {
        id: 'mailcow',
        name: 'Mailcow',
        category: 'productivity',
        categoryLabel: 'Servidor de Correo',
        description: 'Suite de servidor de correo basada en Docker de código abierto, completa y fácil de usar. Proporciona una alternativa completa a Gmail corporativo.',
        tags: ['Email', 'Docker', 'SMTP'],
        url: 'https://mailcow.email/',
        icon: '📧'
    },
    {
        id: 'argocd',
        name: 'Argo CD',
        category: 'cncf',
        categoryLabel: 'Entrega Continua',
        description: 'Herramienta declarativa de entrega continua GitOps para Kubernetes. Automatiza el despliegue de las aplicaciones en el estado deseado.',
        tags: ['GitOps', 'CI/CD', 'CNCF'],
        url: 'https://argoproj.github.io/cd/',
        icon: '🐙'
    },
    {
        id: 'envoy',
        name: 'Envoy',
        category: 'cncf',
        categoryLabel: 'Proxy de Servicios',
        description: 'Proxy de red perimetral y de servicios de alto rendimiento, diseñado para aplicaciones nativas de la nube y arquitecturas de microservicios.',
        tags: ['Proxy', 'Service Mesh', 'CNCF'],
        url: 'https://www.envoyproxy.io/',
        icon: '🔌'
    },
    {
        id: 'helm',
        name: 'Helm',
        category: 'cncf',
        categoryLabel: 'Gestor de Paquetes',
        description: 'El gestor de paquetes de Kubernetes que te ayuda a gestionar aplicaciones de Kubernetes usando "Charts" para definir, instalar y actualizar.',
        tags: ['Paquetes', 'Kubernetes', 'CNCF'],
        url: 'https://helm.sh/',
        icon: '⎈'
    },
    {
        id: 'harbor',
        name: 'Harbor',
        category: 'cncf',
        categoryLabel: 'Registro de Contenedores',
        description: 'Registro nativo de la nube de código abierto que asegura los artefactos con políticas y control de acceso basado en roles (RBAC).',
        tags: ['Registro', 'Seguridad', 'CNCF'],
        url: 'https://goharbor.io/',
        icon: '🚢'
    }
];

const catalogGrid = document.getElementById('catalog-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// SVG Icon for links
const linkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

// Render Cards
function renderCards(filter = 'all') {
    catalogGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? cloudSoftware 
        : cloudSoftware.filter(item => item.category === filter);
        
    if (filteredData.length === 0) {
        catalogGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--text-secondary);">No se encontraron resultados para esta categoría.</p>';
        return;
    }

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${item.icon}</div>
                <span class="card-category">${item.categoryLabel}</span>
            </div>
            <h2 class="card-title">${item.name}</h2>
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <p class="card-description">${item.description}</p>
            <div class="card-footer">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-link">
                    Explorar ${linkIcon}
                </a>
            </div>
        `;
        
        catalogGrid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    // Hide cards initially for animation
    const style = document.createElement('style');
    style.innerHTML = `
        .card { opacity: 0; transform: translateY(20px); transition: all 0.5s ease-out; }
    `;
    document.head.appendChild(style);
    
    renderCards();
});

// Filter logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        
        // Filter and render
        const filterValue = btn.getAttribute('data-filter');
        renderCards(filterValue);
    });
});
