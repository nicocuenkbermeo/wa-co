# Deploy WA.CO

## Paso 1: Crear repo en GitHub
```bash
cd "C:/Users/nicol/OneDrive/Escritorio/Claude/Empresa/wa-co" && gh repo create wa-co --public --source=. --push --description "WA.CO — Agencia de Diseño Web & Automatización con IA. Hecho en Colombia."
```

## Paso 2: Instalar Vercel CLI (si no lo tienes)
```bash
npm i -g vercel
```

## Paso 3: Deploy preview
```bash
cd "C:/Users/nicol/OneDrive/Escritorio/Claude/Empresa/wa-co" && vercel --yes
```

## Paso 4: Deploy producción
```bash
cd "C:/Users/nicol/OneDrive/Escritorio/Claude/Empresa/wa-co" && vercel --prod
```
