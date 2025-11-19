--
-- PostgreSQL database dump
--

\restrict Uc2hUdFuMFE2XwgyomOIbLtfAV03NEIVfNhO9Xrc1LjslYQ7GVV5KP757JFEGPm

-- Dumped from database version 17.5 (aa1f746)
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cart; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."Cart" (
    id integer NOT NULL,
    "userId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Cart" OWNER TO neondb_owner;

--
-- Name: CartItem; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."CartItem" (
    id integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."CartItem" OWNER TO neondb_owner;

--
-- Name: CartItem_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."CartItem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CartItem_id_seq" OWNER TO neondb_owner;

--
-- Name: CartItem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."CartItem_id_seq" OWNED BY public."CartItem".id;


--
-- Name: Cart_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."Cart_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Cart_id_seq" OWNER TO neondb_owner;

--
-- Name: Cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."Cart_id_seq" OWNED BY public."Cart".id;


--
-- Name: Category; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Category" OWNER TO neondb_owner;

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Category_id_seq" OWNER TO neondb_owner;

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    price double precision DEFAULT 0 NOT NULL,
    "categoryId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Product" OWNER TO neondb_owner;

--
-- Name: ProductImage; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."ProductImage" (
    id integer NOT NULL,
    url text NOT NULL,
    "productId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ProductImage" OWNER TO neondb_owner;

--
-- Name: ProductImage_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."ProductImage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProductImage_id_seq" OWNER TO neondb_owner;

--
-- Name: ProductImage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."ProductImage_id_seq" OWNED BY public."ProductImage".id;


--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO neondb_owner;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    otp text,
    "otpExpiresAt" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO neondb_owner;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO neondb_owner;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO neondb_owner;

--
-- Name: Cart id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Cart" ALTER COLUMN id SET DEFAULT nextval('public."Cart_id_seq"'::regclass);


--
-- Name: CartItem id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."CartItem" ALTER COLUMN id SET DEFAULT nextval('public."CartItem_id_seq"'::regclass);


--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: ProductImage id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."ProductImage" ALTER COLUMN id SET DEFAULT nextval('public."ProductImage_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Cart; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."Cart" (id, "userId", "createdAt", "updatedAt") FROM stdin;
1	\N	2025-11-13 07:23:45.568	2025-11-13 07:23:45.568
2	\N	2025-11-13 07:23:46.235	2025-11-13 07:23:46.235
3	\N	2025-11-13 07:23:56.884	2025-11-13 07:23:56.884
4	\N	2025-11-13 07:41:21.564	2025-11-13 07:41:21.564
5	\N	2025-11-13 07:52:29.437	2025-11-13 07:52:29.437
6	\N	2025-11-13 10:45:59.436	2025-11-13 10:45:59.436
7	\N	2025-11-13 10:50:50.839	2025-11-13 10:50:50.839
8	\N	2025-11-13 11:08:41.134	2025-11-13 11:08:41.134
9	\N	2025-11-17 08:51:22.524	2025-11-17 08:51:22.524
10	\N	2025-11-17 09:44:58.04	2025-11-17 09:44:58.04
11	\N	2025-11-17 12:08:13.937	2025-11-17 12:08:13.937
12	\N	2025-11-18 04:40:37.274	2025-11-18 04:40:37.274
13	\N	2025-11-18 05:39:07.003	2025-11-18 05:39:07.003
14	\N	2025-11-18 05:40:34.634	2025-11-18 05:40:34.634
15	\N	2025-11-18 06:33:34.384	2025-11-18 06:33:34.384
16	\N	2025-11-18 07:44:54.228	2025-11-18 07:44:54.228
17	\N	2025-11-18 07:44:55.147	2025-11-18 07:44:55.147
\.


--
-- Data for Name: CartItem; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."CartItem" (id, "cartId", "productId", quantity, "createdAt", "updatedAt") FROM stdin;
1	1	2	1	2025-11-13 07:23:46.487	2025-11-13 07:23:46.487
4	4	2	1	2025-11-13 07:41:22.445	2025-11-13 07:41:22.445
5	5	2	1	2025-11-13 07:52:30.289	2025-11-13 07:52:30.289
6	6	2	1	2025-11-13 10:46:00.295	2025-11-13 10:46:00.295
7	7	2	1	2025-11-13 10:50:51.721	2025-11-13 10:50:51.721
9	9	8	1	2025-11-17 08:51:23.751	2025-11-17 08:51:23.751
10	10	15	1	2025-11-17 09:44:58.967	2025-11-17 09:44:58.967
11	11	12	1	2025-11-17 12:08:13.968	2025-11-17 12:08:13.968
13	13	9	1	2025-11-18 05:39:07.894	2025-11-18 05:39:07.894
14	14	9	1	2025-11-18 05:40:35.059	2025-11-18 05:40:35.059
15	15	8	1	2025-11-18 06:33:34.407	2025-11-18 06:33:34.407
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."Category" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Phool Makahana	2025-11-12 09:29:17.895	2025-11-12 09:29:17.895
2	Rosted / Flavoured Makahan	2025-11-12 09:29:58.874	2025-11-12 09:29:58.874
3	Makhana Cookies	2025-11-12 09:30:17.534	2025-11-12 09:30:17.534
4	Makhana Drink	2025-11-12 09:30:35.128	2025-11-12 09:30:35.128
5	Makhana Atta/Flour	2025-11-12 09:30:54.07	2025-11-12 09:30:54.07
6	Honey	2025-11-12 09:31:13.142	2025-11-12 09:31:13.142
7	Makhana Pasta	2025-11-12 09:31:27.738	2025-11-12 09:31:27.738
8	Vermicile	2025-11-12 09:31:48.786	2025-11-12 09:31:48.786
9	Instant Makhana Kheer	2025-11-12 09:40:27.363	2025-11-12 09:40:27.363
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."Product" (id, name, description, price, "categoryId", "createdAt", "updatedAt") FROM stdin;
14	Makhana Drink	\N	540	4	2025-11-17 09:14:04.509	2025-11-17 09:14:04.509
15	Honey	Our Litchi Flavor Honey is made by bees that collect nectar from litchi flowers.\nThat’s why it has a light, sweet taste with a mild litchi flavor. It’s 100% natural and full of health benefits.\nUses And Benefits\nIt to your tea, Spread it on bread\nMix it in warm water, Use it in dessert\nIt helps boost energy, build immunity.\nPure and Natural, No Added Sugar\nSweet Taste with Litchi Aroma, Good for Health.	399	6	2025-11-17 09:33:19.965	2025-11-17 09:33:19.965
16	Kaushoor Honey	Kaushoor Honey Pure Essence from the Himalayas\nSourced from the untouched valleys of Kashmir, Kaushoor Honey is a rare and premium variety collected from wild forest.\nKnown for its rich texture, natural aroma, every drop supports wellness from within. Whether added to your morning drink, desserts, or skincare, Kaushoor Honey brings the healing touch of nature straight from the mountains to your home.\n100% pure & Natural.\nSupports Immunity, Skin & Digestion.\nPerfect for Daily Health Drinks, Tea & Skincare.\nNo Chemicals, Preservatives, or Added Sugar.\nFlavor for Ayurvedic Kadha.	599	6	2025-11-17 09:35:25.775	2025-11-17 09:35:25.775
17	Apple Honey	Apple Honey which is Discovered in the forest of Himachal & Kashmir , a unique fusion of pure. It’s naturally sweet, deliciously smooth, and packed with nutrients.\nPerfect for drizzling over toast, mixing into tea, or using as a natural sweetener in recipes. Enjoy the taste of orchard-fresh apples in every spoonful.\nBoosts Immunity and Energy Naturally.\nApple honey is rich in boost your immune system and keep your energy levels high throughout the day.\nIt’s a great alternative to processed energy drinks or sugar.\nRich in Nutrients\nPacked with vitamins, minerals, and enzymes, apple honey helps fight free radicals in the body.\nThis supports better cell health and may reduce the risk of lifestyle-related diseases.\nSupports Better Digestion and Gut Health\nThe natural enzymes in honey support smooth digestion and help balance gut bacteria.\nIt may also help relieve issues like bloating or constipation when taken regularly.\nHelps Soothe Sore Throat and Cough.\nA spoonful with warm water or tea brings quick relief from dry cough and cold symptoms.\nPromotes Glowing Skin and Healthy Hair.\nWhen consumed or applied externally, apple honey deeply nourishes the skin and hair,\nit helps reduce acne, dryness, and dullness, giving you a natural glow and shine\n	599	6	2025-11-17 09:36:15.324	2025-11-17 09:36:15.324
5	Mix Masala Makhana	Net Weight 90g Craving something chatpata aur healthy? Try Shhe Foods Mix Masala Makhana â€“ roasted makhana with a spicy twist, straight from Darbhanga! Full of desi flavours and crunchy goodness, itâ€™s the perfect snack for your chai time, office   break, or Netflix binge. No frying, no chemicals â€“ just light, healthy aur tasty snacking. Packed with protein, low on calories, and super satisfying! Yeh sirf snack nahi, Mithila ka swaad hai. So next time you feel hungry â€“ Bite into Shhe, feel the twist! 	225	2	2025-11-13 11:48:12.276	2025-11-18 09:03:57.283
6	Pepper Salt Makhana	Net Weight 90g Discover timeless elegance with SHHE Roasted Makhana & Foxnut - Salt & Pepper. Each premium foxnut is gently roasted to perfection and seasoned with the classic blend of pure salt and freshly ground black pepper, delivering a subtle yet sophisticated flavor profile. This refined snack offers a perfect balance of simplicity and taste, crafted for those who appreciate pure, wholesome indulgence in its most elegant form.	225	2	2025-11-13 11:49:39.845	2025-11-18 09:03:57.283
7	Peri Peri makhana	Net Weight 90g Experience an exhilarating burst of bold flavors with SHHE Roasted Makhana & Foxnut - Peri-Peri. Each meticulously roasted foxnut is infused with a fiery blend of exotic peri-peri spices, delivering a perfect harmony of heat, zest, and crunch. Crafted for those who crave a sophisticated snacking adventure, this gourmet treat combines irresistible taste with nutritional excellence — offering an elevated indulgence with every bite.	225	2	2025-11-13 11:50:26.441	2025-11-18 09:04:52.183
8	Tangy Cheese Makhana	Net Weight 90g Delight in the indulgent fusion of SHHE Roasted Makhana & Foxnut - Tangy Cheese. Each perfectly roasted foxnut is coated with a luscious layer of rich cheese and a subtle tangy twist, creating a gourmet snacking experience that is both irresistible and wholesome. Crafted with precision and care, this luxurious treat offers the perfect balance of bold flavor, delicate crunch, and nutritional goodness — ideal for those who appreciate refined taste in every bite	225	2	2025-11-13 11:51:21.586	2025-11-18 09:04:52.183
2	Phool Makhana	Net Weight 250g Presenting Platinum Makhana — the epitome of purity, luxury, and wellness. Sourced from the finest harvests, each fox nut (Phool Makhana) is meticulously hand-selected for its exceptional size, flawless texture, and superior nutritional profile. Brimming with natural protein, rich in antioxidants, gluten-free, and low in calories, Platinum Makhana offers an unmatched snacking experience for the truly discerning. Whether enjoyed as a sophisticated standalone snack or as part of an elegant gifting collection, SHHE Platinum Makhana embodies the highest standard of health and indulgence.	345	1	2025-11-13 06:35:22.864	2025-11-18 09:06:30.673
11	Makhana Cookies	Indulge in wholesome luxury with Maket Super Makhana and Millet Cookies — where ancient grains meet modern wellness. Crafted with nutrient-rich millet and the light, crunchy goodness of premium makhana, each cookie offers a perfect balance of taste and nourishment. Free from refined flours and artificial additives, these artisanal cookies deliver a delicate crunch, rich flavors, and natural goodness in every bite — a guilt-free indulgence for the health-conscious connoisseur.	75	3	2025-11-17 05:17:57.409	2025-11-18 09:06:50.567
12	Makhana Drink	\N	340	4	2025-11-17 09:12:53.541	2025-11-18 09:07:12.107
13	Makhana Drink	\N	580	4	2025-11-17 09:13:42.593	2025-11-18 09:07:12.107
18	BeeLixir Honey	This Sexual Wellness Honey is designed to naturally enhance stamina, support hormonal balance, and improve overall performance. it helps improve blood circulation, reduce stress, and increase vitality in both men and women.\n\nBoosts Stamina and Performance.\nThis honey helps to improve physical strength and endurance.\nIt supports better energy levels during intimate moments.\nEnhances Libido Naturally.\nit helps increase desire and maintains healthy libido in both men and women without any side effects.\nImproves Blood Circulation.\nRegular use promotes healthy blood flow, especially to vital organs, which is essential for better arousal,\nresponse, and satisfaction.\nReduces Stress and Fatigue.\nThis honey helps to calm the nervous system, reduce anxiety, and fight fatigue allowing you to\nfeel more relaxed and confident.\nSupports Hormonal Balance.\nThis honey helps in regulating key hormones responsible for sexual health and mood.\nIt may also help with hormonal imbalances in men and women.	999	6	2025-11-17 09:37:18.296	2025-11-17 09:37:18.296
47	Salt And Pepper Makhana	Net Weight 55g Discover timeless elegance with SHHE Roasted Makhana & Foxnut - Salt & Pepper. Each premium foxnut is gently roasted to perfection and seasoned with the classic blend of pure salt and freshly ground black pepper, delivering a subtle yet sophisticated flavor profile. This refined snack offers a perfect balance of simplicity and taste, crafted for those who appreciate pure, wholesome indulgence in its most elegant form.	170	2	2025-11-19 07:25:04.568	2025-11-19 07:25:04.568
3	Cream Onion Makhana	Net Weight 90g Get ready to fall in love with the smooth and savoury taste of Shhe Foods Cream & Onion Makhana â€“ a snack thatâ€™s as light as it is flavourful! Roasted to perfection and dusted with a rich blend of creamy goodness and tangy onion, this makhana melts in your mouth with every bite. Itâ€™s not just tasty â€“ itâ€™s healthy too! Packed with protein, low in calories, and made without any harmful additives, itâ€™s your perfect go-to snack for work breaks, movie nights, or guilt-free munching anytime. Made with care in Darbhanga, this flavour brings a global twist to a local treasure. Shhe Foods â€“ Crunch it. Love it. Repeat!	225	2	2025-11-13 11:39:44.926	2025-11-18 08:59:50.042
48	Pudina Makhana	Net Weight 55g Refresh your senses with SHHE Roasted Makhana & Foxnut - Pudina. Each delicately roasted foxnut is enveloped in the cool, aromatic essence of mint, perfectly balanced with select spices to create a light, crisp, and flavorful indulgence. Meticulously crafted for the sophisticated snacker, this gourmet delight offers a refreshing twist on healthy snacking, blending purity, flavor, and elegance in every bite.	170	2	2025-11-19 07:25:53.072	2025-11-19 07:25:53.072
4	Mint Makhana	Net Weight 90g Refresh your senses with SHHE Roasted Makhana & Foxnut - Pudina. Each delicately roasted foxnut is enveloped in the cool, aromatic essence of mint, perfectly balanced with select spices to create a light, crisp, and flavorful indulgence. Meticulously crafted for the sophisticated snacker, this gourmet delight offers a refreshing twist on healthy snacking, blending purity, flavor, and elegance in every bite.	225	2	2025-11-13 11:41:11.163	2025-11-18 09:03:06.833
9	Tango Tomato Makhana	Net Weight 90g Savor the bold, tangy burst of SHHE Roasted Makhana & Foxnut - Chatkara. Each carefully roasted foxnut is infused with a vibrant blend of zesty spices, delivering an exciting explosion of flavors in every bite. Crafted for the discerning palate, this gourmet snack offers a perfect harmony of crunch, taste, and health — elevating everyday snacking into a truly delightful experience.	225	2	2025-11-13 11:52:31.91	2025-11-18 09:04:52.183
43	Cream Onion Makhana	Net Weight 55g Get ready to fall in love with the smooth and savoury taste of Shhe Foods Cream & Onion Makhana â€“ a snack thatâ€™s as light as it is flavourful! Roasted to perfection and dusted with a rich blend of creamy goodness and tangy onion, this makhana melts in your mouth with every bite. Itâ€™s not just tasty â€“ itâ€™s healthy too! Packed with protein, low in calories, and made without any harmful additives, itâ€™s your perfect go-to snack for work breaks, movie nights, or guilt-free munching anytime. Made with care in Darbhanga, this flavour brings a global twist to a local treasure. Shhe Foods â€“ Crunch it. Love it. Repeat!	170	2	2025-11-19 07:21:51.977	2025-11-19 07:21:51.977
44	Mix Masala Makhana	Net Weight 55g Craving something chatpata aur healthy? Try Shhe Foods Mix Masala Makhana â€“ roasted makhana with a spicy twist, straight from Darbhanga! Full of desi flavours and crunchy goodness, itâ€™s the perfect snack for your chai time, office   break, or Netflix binge. No frying, no chemicals â€“ just light, healthy aur tasty snacking. Packed with protein, low on calories, and super satisfying! Yeh sirf snack nahi, Mithila ka swaad hai. So next time you feel hungry â€“ Bite into Shhe, feel the twist! 	170	2	2025-11-19 07:22:44.887	2025-11-19 07:22:44.887
45	Peri Peri Makhana	Net Weight 55g Experience an exhilarating burst of bold flavors with SHHE Roasted Makhana & Foxnut - Peri-Peri. Each meticulously roasted foxnut is infused with a fiery blend of exotic peri-peri spices, delivering a perfect harmony of heat, zest, and crunch. Crafted for those who crave a sophisticated snacking adventure, this gourmet treat combines irresistible taste with nutritional excellence — offering an elevated indulgence with every bite.	170	2	2025-11-19 07:23:23.563	2025-11-19 07:23:23.563
46	Tangy Cheese Makhana	Net Weight 55g Delight in the indulgent fusion of SHHE Roasted Makhana & Foxnut - Tangy Cheese. Each perfectly roasted foxnut is coated with a luscious layer of rich cheese and a subtle tangy twist, creating a gourmet snacking experience that is both irresistible and wholesome. Crafted with precision and care, this luxurious treat offers the perfect balance of bold flavor, delicate crunch, and nutritional goodness — ideal for those who appreciate refined taste in every bite	170	2	2025-11-19 07:24:14.987	2025-11-19 07:24:14.987
\.


--
-- Data for Name: ProductImage; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."ProductImage" (id, url, "productId", "createdAt") FROM stdin;
1	/uploads/1763015722423-b3e242a3-e139-42ea-accc-295f11a4744d-Untitled_design__1_.png	2	2025-11-13 06:35:22.864
2	/uploads/1763033982540-cccf7b0b-285c-4169-b9fc-b5b35f109d02-Cream_onion_makhana__2_.png	3	2025-11-13 11:39:44.926
3	/uploads/1763034070716-3cd97ce5-391b-455b-9e77-a355df719786-Mint_makhana__1_.png	4	2025-11-13 11:41:11.163
4	/uploads/1763034489484-8b70073e-81b3-45ee-9fd3-b1040af2be6d-Mix_masala_makhana__1_.png	5	2025-11-13 11:48:12.276
5	/uploads/1763034579266-f538577d-b396-4209-8d42-5fe443d6918e-Pepper_salt_makhana.png	6	2025-11-13 11:49:39.845
6	/uploads/1763034626014-0725c452-6b17-482e-811d-c9cceb099740-Peri_Peri_makhana.png	7	2025-11-13 11:50:26.441
7	/uploads/1763034680794-4389e495-8c3d-4fb9-9a53-cf0465a06644-Tangy_Cheese_makhana__1_.png	8	2025-11-13 11:51:21.586
8	/uploads/1763034751474-79ae0134-172c-402d-aaa2-09c84eea1d19-Tango_Tomato_makhana.png	9	2025-11-13 11:52:31.91
9	/uploads/1763356676708-d6139834-b54d-4496-951f-406ea64c9938-Untitled_design__2_.png	11	2025-11-17 05:17:57.409
10	/uploads/1763370771137-2ea0bc1a-d081-44c0-9f1a-576c5c11920f-drink.png	12	2025-11-17 09:12:53.541
11	/uploads/1763370821960-9f7724b5-acb6-4adf-88ab-b037d1c78d3f-drink2.png	13	2025-11-17 09:13:42.593
12	/uploads/1763370844022-0fef13b3-c7bd-45a1-bf28-2e7be924e7b2-drink3.png	14	2025-11-17 09:14:04.509
13	/uploads/1763371996965-ee3cc4e5-c1cc-4327-ace0-c0d7e7dcb4c0-litchi.png	15	2025-11-17 09:33:19.965
14	/uploads/1763372125551-9ca72c50-11a6-4f53-92f8-c60dd6a6c9a1-kaushoor.png	16	2025-11-17 09:35:25.775
15	/uploads/1763372174885-ed9a49fe-74cf-448d-b7fd-f7c21481a10e-apple.png	17	2025-11-17 09:36:15.324
16	/uploads/1763372237850-1c507bcf-fd55-4aa1-a4c4-e58d7d8311a7-bee.png	18	2025-11-17 09:37:18.296
41	/uploads/1763536909951-cecad3d6-bbf7-40b2-9940-bc0fb8ba1eee-Cream_and_onion_image.png	43	2025-11-19 07:21:51.977
42	/uploads/1763536964456-59003901-d410-44d9-a0b5-7a1594878fec-Mix_masala_image.png	44	2025-11-19 07:22:44.887
43	/uploads/1763537003133-91bcd922-36c1-4454-9d7f-f53d1b6d081d-Peri_peri_image.png	45	2025-11-19 07:23:23.563
44	/uploads/1763537054527-6656b6eb-8908-4bcf-9709-8ef827c5403a-Tangy_tomato_image.png	46	2025-11-19 07:24:14.987
45	/uploads/1763537104132-15d98915-6bbd-44b2-8b32-f9863407827b-Salt_and_pepper_image.png	47	2025-11-19 07:25:04.568
46	/uploads/1763537152642-05c31b32-b124-462b-b384-e1d60d0f7ad0-Pudina_image.png	48	2025-11-19 07:25:53.072
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public."User" (id, email, otp, "otpExpiresAt", "createdAt", "updatedAt") FROM stdin;
1	sainipankaj1102@gmail.com	610030	2025-11-13 11:19:15.291	2025-11-13 11:09:15.296	2025-11-13 11:09:15.296
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
2ca5b083-e91f-4394-aa62-4fa926361f0c	c9ba9ba926998af58f983208f35279e0b2581c02a1b9761dcf9639a5007d14c4	2025-11-12 09:08:13.329089+00	20251112090811_add_product	\N	\N	2025-11-12 09:08:12.27361+00	1
d80e4923-a592-4657-914e-e58640f89df9	e4993bf96b9e588e1e18032cf0b4f1ea8a5b4630f938acbb6f23c0826a4efc31	2025-11-12 09:15:49.9616+00	20251112091547_add_cart	\N	\N	2025-11-12 09:15:48.750579+00	1
ee7bfd77-5722-442d-8178-27626895d0bf	8e8e3842d6291b77749d2d1edadb588089caf5d9d8504a6ddc541c6900168810	2025-11-13 06:24:27.853441+00	20251113062425_add_product_images	\N	\N	2025-11-13 06:24:26.734132+00	1
\.


--
-- Name: CartItem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."CartItem_id_seq"', 17, true);


--
-- Name: Cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."Cart_id_seq"', 17, true);


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."Category_id_seq"', 10, true);


--
-- Name: ProductImage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."ProductImage_id_seq"', 46, true);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."Product_id_seq"', 48, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: CartItem CartItem_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY (id);


--
-- Name: Cart Cart_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: ProductImage ProductImage_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."ProductImage"
    ADD CONSTRAINT "ProductImage_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Category_name_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "Category_name_key" ON public."Category" USING btree (name);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: CartItem CartItem_cartId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES public."Cart"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CartItem CartItem_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductImage ProductImage_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."ProductImage"
    ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

\unrestrict Uc2hUdFuMFE2XwgyomOIbLtfAV03NEIVfNhO9Xrc1LjslYQ7GVV5KP757JFEGPm

