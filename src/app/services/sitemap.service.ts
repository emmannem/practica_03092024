import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SitemapService {
  constructor() {}

  generateSitemap(): string {
    const domain = 'http://localhost:4200';

    // Define las URLs y las imágenes asociadas
    const urls = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        images: [
          {
            loc: 'https://i.pinimg.com/564x/dd/5f/3b/dd5f3b5fe781a8e8db5d19dfdc63be00.jpg',
            title: 'Imagen Principal',
          },
          {
            loc: 'https://ss237.liverpool.com.mx/xl/1086746041.jpg',
            title: 'Producto 1',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_930483-CBT75109764874_032024-O.webp',
            title: 'Producto 2',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_668154-CBT71492675187_092023-O.webp',
            title: 'Producto 3',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_848939-MLM75511267612_042024-O.webp',
            title: 'Zapatos de Hombre',
          },
          {
            loc: 'https://photos6.spartoo.es/photos/287/28716574/28716574_1200_A.jpg',
            title: 'Zapatos de Mujer',
          },
          {
            loc: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a053b081d8a5463fb6596cd48bf8b40d_9366/ADIZERO_SL_Blanco_ID6924_HM20.jpg',
            title: 'Zapatos Deportivos',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/bancos.svg',
            title: 'Pagos BBVA',
          },
        ],
      },
      {
        loc: '/catalogo',
        changefreq: 'weekly',
        priority: 0.8,
        images: [
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_883551-MLM53901845720_022023-O.webp',
            title: 'Mocasin 1',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_804767-MLM53929271760_022023-O.webp',
            title: 'Oxford 1',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_919134-MLM53901916136_022023-O.webp',
            title: 'Mocasin 2',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_786856-MLM69478762860_052023-O.webp',
            title: 'Sneaker 1',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_983838-MLM54969694320_042023-O.webp',
            title: 'Sneaker 2',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_964625-MLM54969962650_042023-O.webp',
            title: 'Sneaker 3',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_773418-MLM54969930244_042023-O.webp',
            title: 'Sneaker 4',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_699424-MLM69018575956_042023-O.webp',
            title: 'Sneaker 5',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_738797-MLM69480955886_052023-O.webp',
            title: 'Sneaker 6',
          },
          {
            loc: 'https://http2.mlstatic.com/D_NQ_NP_813468-MLM52856074107_122022-O.webp',
            title: 'Botas 1',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/tarjeta.svg',
            title: 'Paga con tarjeta o en efectivo',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/seguridad.svg',
            title: 'Seguridad, de principio a fin',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/envios.svg',
            title: 'Envíos gratis en algunos productos',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/bancos.svg',
            title: 'Pagos BBVA',
          },
        ],
      },
      {
        loc: '/nosotros',
        changefreq: 'monthly',
        priority: 0.6,
        images: [
          {
            loc: 'https://img.freepik.com/fotos-premium/primer-plano-estante-zapatos-zapateria-alta-gama-ia-generativa_697880-6300.jpg?w=826',
            title: 'Imagen Principal',
          },
          {
            loc: 'https://www.milpies.es/image/data/BLOG/cosido-calzado.jpg',
            title: 'Historia de la tienda',
          },
          {
            loc: 'https://www.infobae.com/new-resizer/rH04HmOenW1c-gyLNgteHK2SqMY=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TAHYLBRFERHFBETVBDOBRVF5MQ.jpg',
            title: 'Miembro del equipo',
          },
          {
            loc: 'https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg.webp',
            title: 'Miembro del equipo',
          },
          {
            loc: 'https://c.superprof.com/i/m/12609946/160/20221205143858/12609946.webp',
            title: 'Miembro del equipo',
          },
          {
            loc: 'https://mshopsoficiales.kubocloud.com/mx/chabeloshops/bancos.svg',
            title: 'Pagos BBVA',
          },
        ],
      },
    ];

    // Genera las etiquetas <url> y sus imágenes asociadas
    const xmlUrls = urls
      .map(
        (url) => `
      <url>
        <loc>${domain}${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
        ${url.images
          .map(
            (image) => `
          <image:image>
            <image:loc>${image.loc}</image:loc>
            <image:title>${image.title}</image:title>
          </image:image>
        `
          )
          .join('')}
      </url>
    `
      )
      .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${xmlUrls}
    </urlset>`;
  }
}
