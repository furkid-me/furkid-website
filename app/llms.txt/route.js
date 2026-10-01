export function GET(){const text=`# FURKID.ME

> 人與毛孩共同生活的照護與生活平台。

FURKID.ME helps pet families understand care, health, behavior, everyday life, learning, and professional support. The site is written primarily in Traditional Chinese for Taiwan.

## Core areas
- CARE: health, veterinary education, behavior, emergency preparedness, life stages
- LIVE: food, home, travel, recreation, pet-friendly places, human-animal relationship
- LEARN: owner education and professional pet-care learning
- SUPPORT: in-home pet sitting and professional services
- SOCIETY: welfare, regulation, policy, One Health and social context (planned)
- CHOOSE: evidence and data-supported decisions; product-level data is handled by VASTET

## Key resources
- https://furkid.me/vet-guide — veterinary guide hub
- https://furkid.me/support — support and pet-care services
- https://furkid.me/learn — learning
- https://furkid.me/about — brand and editorial principles
- https://food.vastet.co — VASTET product/data decision platform

## Editorial principles
Important knowledge should be traceable to sources when possible. Medical education does not replace veterinary diagnosis or treatment. FURKID.ME aims to help users understand context and make informed decisions rather than make decisions for them.

## Brand
Better life, together.
把愛，變成更好的照護。
`;
return new Response(text,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public, max-age=3600"}})}