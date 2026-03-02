export interface Project {
  id: string
  title: string
  titleEn: string
  category: string
  year: string
  location: string
  image: string
  description: string
  concept: string
}

export interface InstagramPost {
  id: string
  image: string
  caption: string
  series: 'STAIRCASE' | 'DETAIL' | 'PROCESS' | 'MATERIAL'
}

export interface ProjectListItem {
  year: string
  name: string
  nameEn: string
  scale: string
  status: 'Complete' | 'In Progress' | 'Concept'
}

export const projects: Project[] = [
  {
    id: '01',
    title: '光の家',
    titleEn: 'House of Light',
    category: 'Residential',
    year: '2023',
    location: '東京都世田谷区',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&auto=format&fit=crop&q=80',
    description:
      '南面の大開口と深い軒により、季節と時刻で表情を変える木造住宅。自然光を主役とした空間計画では、外部と内部の境界を曖昧にすることで、住まい手が常に自然の循環の中に身を置けるよう設計した。',
    concept: '光を住む。',
  },
  {
    id: '02',
    title: 'Void House',
    titleEn: 'Void House',
    category: 'Residential',
    year: '2022',
    location: '神奈川県鎌倉市',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&auto=format&fit=crop&q=80',
    description:
      '中央の吹き抜けを核として生活空間が展開する住宅。コンクリートと木材の対話が、空間に緊張感と温かさを同時にもたらす。空虚が空間を定義するという逆説的な構成を探求した。',
    concept: '空虚が空間を定義する。',
  },
  {
    id: '03',
    title: '段の家',
    titleEn: 'House of Steps',
    category: 'Residential',
    year: '2022',
    location: '兵庫県芦屋市',
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=900&auto=format&fit=crop&q=80',
    description:
      '傾斜地の地形に従い、建物全体を「段」として設計した住宅。各フロアが半層ずつずれることで、連続しながらも独立した領域が生まれ、家族それぞれの居場所を確保する。',
    concept: '地形を読む。',
  },
  {
    id: '04',
    title: 'コンクリートの瞑想室',
    titleEn: 'Meditation Room',
    category: 'Interior',
    year: '2021',
    location: '京都府京都市',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&auto=format&fit=crop&q=80',
    description:
      '打ち放しコンクリートのみで構成された瞑想のための空間。素材の均質性が時間の感覚を失わせ、使用者を日常から切り離す。天窓からの光が1日を通じて空間の表情を変え続ける。',
    concept: '素材が時間を消す。',
  },
  {
    id: '05',
    title: '風の回廊',
    titleEn: 'Wind Corridor',
    category: 'Cultural',
    year: '2021',
    location: '長野県松本市',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80',
    description:
      '山の風が建物を貫通するよう計画された文化施設。建物の形態自体が風道となり、機械設備に頼らない自然換気を実現。構造と環境が不可分の関係を結ぶ。',
    concept: '建築が風を可視化する。',
  },
  {
    id: '06',
    title: 'Thin House',
    titleEn: 'Thin House',
    category: 'Residential',
    year: '2020',
    location: '東京都渋谷区',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80',
    description:
      '間口2.4メートルの極小敷地に建つ住宅。薄さを武器に、垂直方向への拡張で豊かな空間を実現した。都市の密度と個人のプライバシーの矛盾を解く試み。',
    concept: '薄さが豊かさを生む。',
  },
  {
    id: '07',
    title: '素材の家',
    titleEn: 'House of Materials',
    category: 'Residential',
    year: '2020',
    location: '静岡県浜松市',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&auto=format&fit=crop&q=80',
    description:
      '木・石・鉄・コンクリートという4つの素材が、それぞれの場所で固有の役割を担う住宅。材料の誠実な使い方が、空間に正直さと強さをもたらす。',
    concept: '素材に正直である。',
  },
  {
    id: '08',
    title: '書斎の塔',
    titleEn: 'Tower of Study',
    category: 'Residential',
    year: '2019',
    location: '愛知県名古屋市',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=80',
    description:
      '4層の螺旋状書斎を中心に生活が展開する住宅。知識の蓄積と思考の深化を建築的に表現した。本に囲まれた垂直の世界は、都市から隔絶した知の避難所となる。',
    concept: '思考の垂直運動。',
  },
  {
    id: '09',
    title: '縁側の家',
    titleEn: 'Veranda House',
    category: 'Residential',
    year: '2019',
    location: '奈良県奈良市',
    image: 'https://images.unsplash.com/photo-1503387762-592daa8c1d88?w=900&auto=format&fit=crop&q=80',
    description:
      '日本の伝統的な「縁側」という中間領域を現代的に解釈した住宅。内と外、公と私の間に漂う曖昧な領域が、生活に豊かなグラデーションをもたらす。',
    concept: '中間領域に宿る豊かさ。',
  },
]

export const instagramPosts: InstagramPost[] = [
  {
    id: 'ig-01',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80',
    caption:
      'この階段は、光を切り分ける彫刻として設計した。各段は水平面として機能しながら、天窓から斜めに落ちる光が踏面に当たる角度を精密に計算している。上がることが、光の中を移動することと等価になる瞬間を目指した。',
    series: 'STAIRCASE',
  },
  {
    id: 'ig-02',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&auto=format&fit=crop&q=80',
    caption:
      'コンクリートと木の接合部。異なる素材が出会う瞬間に、設計者の意図が最も凝縮される。この継ぎ目は構造的な必要から生まれたが、同時に二つの時間軸—永続と成長—が交差する場所でもある。',
    series: 'DETAIL',
  },
  {
    id: 'ig-03',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    caption:
      '螺旋階段のスタディ模型。何度も作り直したが、最終的に決定したのは最もシンプルな形。複雑さを削ぎ落とした先に、構造の論理と美しさが一致する瞬間が来る。それを待つ作業がスタディの本質だ。',
    series: 'PROCESS',
  },
  {
    id: 'ig-04',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&auto=format&fit=crop&q=80',
    caption:
      '打ち放しコンクリートの表面に宿る時間。型枠の痕跡、気泡の跡、水が引いた後のシミ。意図せず記録された製作の痕跡が、完成後も素材に残り続ける。建築は常に「作られた」という記憶を持つ。',
    series: 'MATERIAL',
  },
  {
    id: 'ig-05',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
    caption:
      '鉄骨の階段。溶接の線、ボルトの頭、鋼板の厚み。工業的な部材を建築に引き込む際、その「生のまま」の誠実さをどこまで残すか。装飾と構造の境界線を探り続けている。',
    series: 'STAIRCASE',
  },
  {
    id: 'ig-06',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=80',
    caption:
      '窓の縁。内と外を分ける最小の要素として、窓枠の厚みと深さを慎重に設計した。壁の厚みの中に生まれる影が、開口部に奥行きと重力を与える。薄すぎる窓は、空間を軽くしすぎる。',
    series: 'DETAIL',
  },
  {
    id: 'ig-07',
    image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&auto=format&fit=crop&q=80',
    caption:
      '1/50スケールの模型で確認する光の落ち方。晴天の屋外に模型を持ち出し、時刻と方位を変えながら影を観察する。コンピューターシミュレーションよりも、この作業の方がまだ多くを教えてくれる。',
    series: 'PROCESS',
  },
  {
    id: 'ig-08',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=80',
    caption:
      '木の年輪と節。自然素材を使うことは、生命の時間を空間に持ち込むことだ。均一ではない木目が、工業製品にはない固有性を空間に与える。完璧でないことが、ここでは強みになる。',
    series: 'MATERIAL',
  },
  {
    id: 'ig-09',
    image: 'https://images.unsplash.com/photo-1529408686214-29f1a355f779?w=600&auto=format&fit=crop&q=80',
    caption:
      '木造の階段。踏板の厚み、蹴込みの有無、手摺の断面。上り下りという行為が、素材と寸法の選択によって全く異なる体験になる。この住宅では蹴込みをなくし、光が階段を貫通するよう設計した。',
    series: 'STAIRCASE',
  },
]

// ─── Project List (2023–2026) ─────────────────────────────────────────────────
export const projectList: ProjectListItem[] = [
  { year: '2026', name: '長堀通の長屋改修', nameEn: 'Row House Renovation, Nagahori', scale: '長屋改修', status: 'Concept' },
  { year: '2026', name: '現代茶室', nameEn: 'Contemporary Tea Room', scale: '新築', status: 'Concept' },
  { year: '2025', name: '倉庫のアトリエ改修', nameEn: 'Warehouse Atelier', scale: '倉庫改修', status: 'In Progress' },
  { year: '2025', name: '鎌倉・別荘の改修', nameEn: 'Villa Renovation, Kamakura', scale: '住宅改修', status: 'In Progress' },
  { year: '2024', name: '京都・町家の改修', nameEn: 'Machiya Renovation, Kyoto', scale: '町家改修', status: 'Complete' },
  { year: '2024', name: '集合住宅共用部改修', nameEn: 'Common Space Renovation', scale: '集合住宅改修', status: 'Complete' },
  { year: '2024', name: '路地の住宅', nameEn: 'Alley House', scale: '住宅改修', status: 'Complete' },
  { year: '2023', name: '光の家', nameEn: 'House of Light', scale: '住宅', status: 'Complete' },
  { year: '2023', name: '有馬・旅館の一室', nameEn: 'Inn Room, Arima', scale: '旅館改修', status: 'Complete' },
  { year: '2023', name: '旧工場のアトリエ化', nameEn: 'Factory-to-Atelier', scale: '用途変更改修', status: 'Complete' },
]

// Legacy helper (unused in new pattern-a, kept for compatibility)
export type GridItem =
  | { type: 'project'; data: Project }
  | { type: 'instagram'; data: InstagramPost }

export function getMixedGrid(): GridItem[] {
  const items: GridItem[] = []
  const maxLen = Math.max(projects.length, instagramPosts.length)

  for (let i = 0; i < maxLen; i++) {
    if (i < projects.length) items.push({ type: 'project', data: projects[i] })
    if (i % 3 === 2 && i / 3 < instagramPosts.length) {
      items.splice(items.length - 1, 0, {
        type: 'instagram',
        data: instagramPosts[Math.floor(i / 3)],
      })
    }
  }

  const usedIg = Math.floor((projects.length - 1) / 3) + 1
  for (let i = usedIg; i < instagramPosts.length; i++) {
    items.push({ type: 'instagram', data: instagramPosts[i] })
  }

  return items
}
