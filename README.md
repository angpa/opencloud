# Enterprise Open Cloud Stack

**Enterprise Open Cloud Stack** es un catálogo interactivo y moderno diseñado para guiarte en la selección de herramientas 100% de código abierto (Open Source) para construir, gestionar y escalar infraestructura de nube a nivel empresarial.

## 🚀 Características

- **Catálogo Curado:** Una selección de las mejores herramientas open source divididas por categorías.
- **Filtrado Dinámico:** Explora fácilmente entre diferentes capas de la infraestructura:
  - Computación
  - Almacenamiento
  - Redes
  - Orquestación
  - Observabilidad
  - Productividad
  - Cloud Native (CNCF)
- **Diseño Moderno:** Interfaz estética y responsiva usando HTML, CSS puro y JavaScript, destacando tipografías modernas y efectos visuales atractivos.

## 🧰 Herramientas en el Catálogo

El catálogo incluye actualmente las siguientes herramientas de código abierto organizadas por capa de infraestructura:

- **Computación:** OpenStack, Proxmox VE
- **Almacenamiento:** Ceph, MinIO, TrueNAS SCALE
- **Redes:** pfSense / OPNsense, Cilium
- **Orquestación e IaC:** Kubernetes, OKD (OpenShift), OpenTofu, Ansible
- **Observabilidad:** Prometheus & Grafana
- **Productividad:** Nextcloud, Collabora Online, Jitsi Meet, Mattermost, Mailcow
- **Cloud Native (CNCF):** Argo CD, Envoy, Helm, Harbor *(Nota: Kubernetes, Prometheus y Cilium también son proyectos CNCF)*

## 🛠 Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3 (Vanilla):** Estilos personalizados, variables de diseño, y animaciones suaves (glassmorphism, gradientes dinámicos).
- **JavaScript (Vanilla):** Lógica de filtrado y renderizado dinámico de los elementos del catálogo.

## 📦 Instalación y Uso

Dado que el proyecto está basado en tecnologías web estándar, no requiere de un proceso de construcción complejo.

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/angpa/opencloud.git
   ```
2. **Abre el proyecto:**
   Simplemente abre el archivo `index.html` en tu navegador de preferencia o sírvelo mediante un servidor local ligero (como Live Server o el módulo `http.server` de Python).
   ```bash
   # Ejemplo usando Python
   python -m http.server 8000
   ```
   Y visita `http://localhost:8000` en tu navegador.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas agregar nuevas herramientas open source al catálogo o mejorar la interfaz:

1. Haz un Fork del proyecto.
2. Crea tu rama de características (`git checkout -b feature/NuevaCaracteristica`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva herramienta al catálogo'`).
4. Haz push a la rama (`git push origin feature/NuevaCaracteristica`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de utilizarlo, modificarlo y distribuirlo de acuerdo a tus necesidades.
