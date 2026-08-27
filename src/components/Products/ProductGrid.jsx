'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  'All',
  'Seating',
  'Tables',
  'Storage',
  'Lighting',
  'Materials',
];

const PRODUCTS = [
  {
    id: 1,
    title: 'The Obsidian Sofa',
    category: 'Seating',
    href: '/productdetail',
    actionText: 'View Details',
    showArrow: true,
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
    marginTop: '',
    aspectRatio: 'aspect-[4/3]',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRD3h-lg5wsuqtmY6QnFtb4FpJP42qeDiW-a3NNLOebAeg7kL8LhX2_iBZw5Kfd0hzUgMZz56wsj0iddzhbZsRtmtG9UWCVmuodDyxlV0PWaSVwai4kiVIbXyYwUyxRqndeMCXz5BMU1uuHaMuGw_8LtkDg1zxbAtgdFvfjMPIPaUvKzrD5fi76RM9IYS-6GMEUJ7fi6k8JrRFM_e0FX9jYtdeFAO9H5gApAajHXNvaj1ibzFGqXth',
    layout: 'row',
  },
  {
    id: 2,
    title: 'Brushed Brass Pendant',
    category: 'Lighting',
    href: '/productdetail',
    actionText: 'Explore',
    showArrow: false,
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-4',
    marginTop: 'mt-12 md:mt-0 lg:mt-32',
    aspectRatio: 'aspect-[3/4]',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsXDkAhuP7Fxt0oiVbllumGUeljuGoQvYoPg-_2qUKtfZ-ucV4uejyML49YhUFMSUCqisiS1hqoVv5CHRTlmYc5xghhv-TlIs3ANR0weEUXGvsZerBJp2zVPK1hFFrvA3tM2E1zFa3sqyMgOBJUatZ6rcd3KddCRqIzjmqZaYZ10D4PZdZbZ04Nb5ZVVK-f4BvlorcuRGjRT4h9zaNnajPPwH1H7W-VdyZYmYfn2zUQgd-qwtGuyTd',
    layout: 'row',
  },
  {
    id: 3,
    title: 'Marble Monolith Dining Table',
    category: 'Tables',
    href: '/productdetail',
    actionText: 'View Details',
    showArrow: false,
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-6',
    marginTop: 'mt-16 md:mt-24',
    aspectRatio: 'aspect-square',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMyD91lhNhVXEqmJivn2Q3-wcbWcUDoHkF2vJL3OvMlDdClRm_eNtdTOVs4y1a0_NdtcUl7_bCKjSeccv4yFqTgsv9-o3NIhoJEGlod57YgWPhOd-1nnePwxhtgdG-I3I8Obv6pzsuEBSNAZTDdVYpY6rcHmW42LJlP5x7MnDBF0EXW_g9PdOAIOif41PetfnUM6etrJebzqM0zgIrxh9LSlc1QZ9saO8FylPr-Hi1ZICBprhUrxyI',
    layout: 'responsive-row',
  },
  {
    id: 4,
    title: 'Custom Walnut Cabinetry',
    category: 'Storage',
    href: '/productdetail',
    actionText: 'View Details',
    showArrow: false,
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
    marginTop: 'mt-16 md:mt-48',
    aspectRatio: 'aspect-[3/4]',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrUxZ11i9J4fSRzlBB0plKw4gwEuxgKREH7BbSHbsM5qNVwhRdvMgYDog9ZImoShMMBE0EDVg3U_AE1CfOSqEIenJgmJhwnVquMIM4bnCo1KlEi4gp2QVtEGMJ-k-sSUtfTys46phSAsNsPjC5g1CV-7UxRUv8ZtA5SOJ1_QMQAplgajZz65gd-eaOJNbMUtQOc3E8ap_Ud7dznhQR9TNf8xI65NtzrSuRKfzRC4etM0v6H6DyfSTz',
    layout: 'col',
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <>
      {/* Sticky Filter Bar */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 mb-16 sticky top-20 z-40 bg-[#18120d]/95 backdrop-blur-sm py-4 border-b border-[#444748]/20">
        <div className="flex overflow-x-auto gap-8 pb-2 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap px-1 pb-1 transition-all duration-300 ${isActive
                  ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                  : 'text-[#c4c7c7] hover:text-[#eee0d6]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Product Grid */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="contents">
              {/* Layout rhythm spacer before Table 3 when all items are shown */}
              {activeCategory === 'All' && index === 2 && (
                <div className="hidden lg:block lg:col-span-2" />
              )}

              <Link
                href={product.href}
                className={`${product.colSpan} ${product.marginTop} group cursor-pointer relative overflow-hidden`}
              >
                <article>
                  <div
                    className={`w-full ${product.aspectRatio} overflow-hidden bg-[#251e19] mb-6 relative`}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Footer details per card layout style */}
                  {product.layout === 'row' && (
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] mb-2">
                          {product.category}
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-[#eee0d6] group-hover:text-[#e9c176] transition-colors duration-300">
                          {product.title}
                        </h2>
                      </div>

                      <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#eee0d6] border-b border-transparent group-hover:border-[#e9c176] transition-all duration-300 flex items-center gap-2">
                        {product.actionText}

                        {product.showArrow && (
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  )}

                  {product.layout === 'responsive-row' && (
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] mb-2">
                          {product.category}
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-[#eee0d6] group-hover:text-[#e9c176] transition-colors duration-300">
                          {product.title}
                        </h2>
                      </div>

                      <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#eee0d6] border-b border-transparent group-hover:border-[#e9c176] transition-all duration-300 flex items-center gap-2 sm:self-end">
                        {product.actionText}
                      </span>
                    </div>
                  )}

                  {product.layout === 'col' && (
                    <div className="flex justify-between items-start flex-col gap-4">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] mb-2">
                          {product.category}
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-[#eee0d6] group-hover:text-[#e9c176] transition-colors duration-300">
                          {product.title}
                        </h2>
                      </div>

                      <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#eee0d6] border-b border-transparent group-hover:border-[#e9c176] transition-all duration-300">
                        {product.actionText}
                      </span>
                    </div>
                  )}
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty Category State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7]">
              No bespoke items currently cataloged in this category.
            </p>
          </div>
        )}
      </main>
    </>
  );
}