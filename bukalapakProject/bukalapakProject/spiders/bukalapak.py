# -*- coding: utf-8 -*-
import scrapy


class BukalapakSpider(scrapy.Spider):
    name = 'bukalapak'
    start_urls = ['https://www.bukalapak.com/products?utf8=%E2%9C%93&source=navbar&from=omnisearch&search_source=omnisearch_organic&from_keyword_history=false&search%5Bkeywords%5D=busana+muslim']

    def parse(self, response):
        all_busana = response.css('div.product-card')
        for busana in all_busana:
            title = busana.css('a.product__name').attrib['title']
            price = busana.css('span.amount::text').extract()
            image = busana.css('img.product-media__img').attrib['data-src']
            yield{
                'title' : title,
                'price' : price,
                'image' : image
            }

