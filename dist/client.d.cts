import * as better_auth_client from 'better-auth/client';
import { BetterFetchOption } from 'better-auth/client';
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
export { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import * as better_auth from 'better-auth';
import { User } from 'better-auth';
import { Polar } from '@polar-sh/sdk';
import * as z from 'zod/v4';
import * as _polar_sh_sdk_models_operations_customerportalorderslist_js from '@polar-sh/sdk/models/operations/customerportalorderslist.js';
import * as _polar_sh_sdk_models_operations_customerportalsubscriptionslist_js from '@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js';
import * as _polar_sh_sdk_models_operations_subscriptionslist_js from '@polar-sh/sdk/models/operations/subscriptionslist.js';
import * as _polar_sh_sdk_types_operations_js from '@polar-sh/sdk/types/operations.js';
import * as _polar_sh_sdk_models_operations_customerportalbenefitgrantslist_js from '@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js';
import * as _polar_sh_sdk_models_components_customerstate_js from '@polar-sh/sdk/models/components/customerstate.js';
import * as _polar_sh_sdk_models_components_eventsingestresponse_js from '@polar-sh/sdk/models/components/eventsingestresponse.js';
import * as _polar_sh_sdk_models_operations_customerportalcustomermeterslist_js from '@polar-sh/sdk/models/operations/customerportalcustomermeterslist.js';
import { WebhookBenefitCreatedPayload } from '@polar-sh/sdk/models/components/webhookbenefitcreatedpayload';
import { WebhookBenefitGrantCreatedPayload } from '@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload';
import { WebhookBenefitGrantRevokedPayload } from '@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload';
import { WebhookBenefitGrantUpdatedPayload } from '@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload';
import { WebhookBenefitUpdatedPayload } from '@polar-sh/sdk/models/components/webhookbenefitupdatedpayload';
import { WebhookCheckoutCreatedPayload } from '@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload';
import { WebhookCheckoutUpdatedPayload } from '@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload';
import { WebhookCustomerCreatedPayload } from '@polar-sh/sdk/models/components/webhookcustomercreatedpayload';
import { WebhookCustomerDeletedPayload } from '@polar-sh/sdk/models/components/webhookcustomerdeletedpayload';
import { WebhookCustomerStateChangedPayload } from '@polar-sh/sdk/models/components/webhookcustomerstatechangedpayload';
import { WebhookCustomerUpdatedPayload } from '@polar-sh/sdk/models/components/webhookcustomerupdatedpayload';
import { WebhookOrderCreatedPayload } from '@polar-sh/sdk/models/components/webhookordercreatedpayload';
import { WebhookOrderPaidPayload } from '@polar-sh/sdk/models/components/webhookorderpaidpayload';
import { WebhookOrderRefundedPayload } from '@polar-sh/sdk/models/components/webhookorderrefundedpayload';
import { WebhookOrderUpdatedPayload } from '@polar-sh/sdk/models/components/webhookorderupdatedpayload';
import { WebhookOrganizationUpdatedPayload } from '@polar-sh/sdk/models/components/webhookorganizationupdatedpayload';
import { WebhookProductCreatedPayload } from '@polar-sh/sdk/models/components/webhookproductcreatedpayload';
import { WebhookProductUpdatedPayload } from '@polar-sh/sdk/models/components/webhookproductupdatedpayload';
import { WebhookRefundCreatedPayload } from '@polar-sh/sdk/models/components/webhookrefundcreatedpayload';
import { WebhookRefundUpdatedPayload } from '@polar-sh/sdk/models/components/webhookrefundupdatedpayload';
import { WebhookSubscriptionActivePayload } from '@polar-sh/sdk/models/components/webhooksubscriptionactivepayload';
import { WebhookSubscriptionCanceledPayload } from '@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload';
import { WebhookSubscriptionCreatedPayload } from '@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload';
import { WebhookSubscriptionRevokedPayload } from '@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload';
import { WebhookSubscriptionUncanceledPayload } from '@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload';
import { WebhookSubscriptionUpdatedPayload } from '@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload';
import { validateEvent } from '@polar-sh/sdk/webhooks';
import * as zod_v4_core from 'zod/v4/core';
import * as zod from 'zod';

interface PortalConfig {
    returnUrl?: string;
    /**
     * Portal theme
     */
    theme?: "light" | "dark";
}
declare const portal: ({ returnUrl, theme }?: PortalConfig) => (polar: Polar) => {
    portal: better_auth.StrictEndpoint<"/customer/portal", {
        method: ("POST" | "GET")[];
        body: z.ZodOptional<z.ZodObject<{
            redirect: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, {
        url: string;
        redirect: boolean;
    }>;
    state: better_auth.StrictEndpoint<"/customer/state", {
        method: "GET";
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, _polar_sh_sdk_models_components_customerstate_js.CustomerState>;
    benefits: better_auth.StrictEndpoint<"/customer/benefits/list", {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>>;
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalbenefitgrantslist_js.CustomerPortalBenefitGrantsListResponse, {
        page: number;
    }>>;
    subscriptions: better_auth.StrictEndpoint<"/customer/subscriptions/list", {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            referenceId: z.ZodOptional<z.ZodString>;
            page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            active: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
        }, z.core.$strip>>;
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_subscriptionslist_js.SubscriptionsListResponse, {
        page: number;
    }> | _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalsubscriptionslist_js.CustomerPortalSubscriptionsListResponse, {
        page: number;
    }>>;
    orders: better_auth.StrictEndpoint<"/customer/orders/list", {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            productBillingType: z.ZodOptional<z.ZodEnum<{
                recurring: "recurring";
                one_time: "one_time";
            }>>;
        }, z.core.$strip>>;
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalorderslist_js.CustomerPortalOrdersListResponse, {
        page: number;
    }>>;
};

interface UsageOptions {
    /**
     * Products to use for topping up credits
     */
    creditProducts?: Product[] | (() => Promise<Product[]>);
}
declare const usage: (_usageOptions?: UsageOptions) => (polar: Polar) => {
    meters: better_auth.StrictEndpoint<"/usage/meters/list", {
        method: "GET";
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        query: z.ZodObject<{
            page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
    }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalcustomermeterslist_js.CustomerPortalCustomerMetersListResponse, {
        page: number;
    }>>;
    ingestion: better_auth.StrictEndpoint<"/usage/ingest", {
        method: "POST";
        body: z.ZodObject<{
            event: z.ZodString;
            metadata: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        }, z.core.$strip>;
        use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    }, _polar_sh_sdk_models_components_eventsingestresponse_js.EventsIngestResponse>;
};

interface WebhooksOptions {
    /**
     * Webhook Secret
     */
    secret: string;
    /**
     * Generic handler for all webhooks
     */
    onPayload?: (payload: ReturnType<typeof validateEvent>) => Promise<void>;
    /**
     * Webhook for checkout created
     */
    onCheckoutCreated?: (payload: WebhookCheckoutCreatedPayload) => Promise<void>;
    /**
     * Webhook for checkout updated
     */
    onCheckoutUpdated?: (payload: WebhookCheckoutUpdatedPayload) => Promise<void>;
    /**
     * Webhook for order created
     */
    onOrderCreated?: (payload: WebhookOrderCreatedPayload) => Promise<void>;
    /**
     * Webhook for order refunded
     */
    onOrderRefunded?: (payload: WebhookOrderRefundedPayload) => Promise<void>;
    /**
     * Webhook for order paid
     */
    onOrderPaid?: (payload: WebhookOrderPaidPayload) => Promise<void>;
    /**
     * Webhook for order updated
     */
    onOrderUpdated?: (payload: WebhookOrderUpdatedPayload) => Promise<void>;
    /**
     * Webhook for refund created
     */
    onRefundCreated?: (payload: WebhookRefundCreatedPayload) => Promise<void>;
    /**
     * Webhook for refund updated
     */
    onRefundUpdated?: (payload: WebhookRefundUpdatedPayload) => Promise<void>;
    /**
     * Webhook for subscription created
     */
    onSubscriptionCreated?: (payload: WebhookSubscriptionCreatedPayload) => Promise<void>;
    /**
     * Webhook for subscription updated
     */
    onSubscriptionUpdated?: (payload: WebhookSubscriptionUpdatedPayload) => Promise<void>;
    /**
     * Webhook for subscription active
     */
    onSubscriptionActive?: (payload: WebhookSubscriptionActivePayload) => Promise<void>;
    /**
     * Webhook for subscription canceled
     */
    onSubscriptionCanceled?: (payload: WebhookSubscriptionCanceledPayload) => Promise<void>;
    /**
     * Webhook for subscription revoked
     */
    onSubscriptionRevoked?: (payload: WebhookSubscriptionRevokedPayload) => Promise<void>;
    /**
     * Webhook for subscription uncanceled
     */
    onSubscriptionUncanceled?: (payload: WebhookSubscriptionUncanceledPayload) => Promise<void>;
    /**
     * Webhook for product created
     */
    onProductCreated?: (payload: WebhookProductCreatedPayload) => Promise<void>;
    /**
     * Webhook for product updated
     */
    onProductUpdated?: (payload: WebhookProductUpdatedPayload) => Promise<void>;
    /**
     * Webhook for organization updated
     */
    onOrganizationUpdated?: (payload: WebhookOrganizationUpdatedPayload) => Promise<void>;
    /**
     * Webhook for benefit created
     */
    onBenefitCreated?: (payload: WebhookBenefitCreatedPayload) => Promise<void>;
    /**
     * Webhook for benefit updated
     */
    onBenefitUpdated?: (payload: WebhookBenefitUpdatedPayload) => Promise<void>;
    /**
     * Webhook for benefit grant created
     */
    onBenefitGrantCreated?: (payload: WebhookBenefitGrantCreatedPayload) => Promise<void>;
    /**
     * Webhook for benefit grant updated
     */
    onBenefitGrantUpdated?: (payload: WebhookBenefitGrantUpdatedPayload) => Promise<void>;
    /**
     * Webhook for benefit grant revoked
     */
    onBenefitGrantRevoked?: (payload: WebhookBenefitGrantRevokedPayload) => Promise<void>;
    /**
     * Webhook for customer created
     */
    onCustomerCreated?: (payload: WebhookCustomerCreatedPayload) => Promise<void>;
    /**
     * Webhook for customer updated
     */
    onCustomerUpdated?: (payload: WebhookCustomerUpdatedPayload) => Promise<void>;
    /**
     * Webhook for customer deleted
     */
    onCustomerDeleted?: (payload: WebhookCustomerDeletedPayload) => Promise<void>;
    /**
     * Webhook for customer state changed
     */
    onCustomerStateChanged?: (payload: WebhookCustomerStateChangedPayload) => Promise<void>;
}
declare const webhooks: (options: WebhooksOptions) => (_polar: Polar) => {
    polarWebhooks: better_auth.StrictEndpoint<"/polar/webhooks", {
        method: "POST";
        metadata: {
            isAction: false;
        };
        cloneRequest: true;
    }, {
        received: boolean;
    }>;
};

type Product = {
    /**
     * Product Id from Polar Product
     */
    productId: string;
    /**
     * Easily identifiable slug for the product
     */
    slug: string;
};
type PolarPlugin = ReturnType<typeof checkout> | ReturnType<typeof usage> | ReturnType<typeof portal> | ReturnType<typeof webhooks>;
type PolarPlugins = [PolarPlugin, ...PolarPlugin[]];
interface PolarOptions {
    /**
     * Polar Client
     */
    client: Polar;
    /**
     * Enable customer creation when a user signs up
     */
    createCustomerOnSignUp?: boolean;
    /**
     * A custom function to get the customer create
     * params
     * @param data - data containing user and session
     * @returns
     */
    getCustomerCreateParams?: (data: {
        user: Partial<User>;
    }, request?: Request) => Promise<{
        metadata?: Record<string, string | number | boolean>;
    }>;
    /**
     * Use Polar plugins
     */
    use: PolarPlugins;
}

interface CheckoutOptions {
    /**
     * Optional list of slug -> productId mappings for easy slug checkouts
     */
    products?: Product[] | (() => Promise<Product[]>);
    /**
     * Checkout Success URL
     */
    successUrl?: string;
    /**
     * Checkout Return URL
     */
    returnUrl?: string;
    /**
     * Only allow authenticated customers to checkout
     */
    authenticatedUsersOnly?: boolean;
    /**
     * Checkout theme
     */
    theme?: "light" | "dark";
}
declare const CheckoutParams: z.ZodObject<{
    products: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
    slug: z.ZodOptional<z.ZodString>;
    referenceId: z.ZodOptional<z.ZodString>;
    customFieldData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
    allowDiscountCodes: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    discountId: z.ZodOptional<z.ZodString>;
    redirect: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    embedOrigin: z.ZodOptional<z.ZodURL>;
    successUrl: z.ZodOptional<z.ZodString>;
    returnUrl: z.ZodOptional<z.ZodString>;
    allowTrial: z.ZodOptional<z.ZodBoolean>;
    trialInterval: z.ZodOptional<z.ZodEnum<{
        day: "day";
        week: "week";
        month: "month";
        year: "year";
    }>>;
    trialIntervalCount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
        aed: "aed";
        all: "all";
        amd: "amd";
        aoa: "aoa";
        ars: "ars";
        aud: "aud";
        awg: "awg";
        azn: "azn";
        bam: "bam";
        bbd: "bbd";
        bdt: "bdt";
        bif: "bif";
        bmd: "bmd";
        bnd: "bnd";
        bob: "bob";
        brl: "brl";
        bsd: "bsd";
        bwp: "bwp";
        bzd: "bzd";
        cad: "cad";
        cdf: "cdf";
        chf: "chf";
        clp: "clp";
        cny: "cny";
        cop: "cop";
        crc: "crc";
        cve: "cve";
        czk: "czk";
        djf: "djf";
        dkk: "dkk";
        dop: "dop";
        dzd: "dzd";
        egp: "egp";
        etb: "etb";
        eur: "eur";
        fjd: "fjd";
        fkp: "fkp";
        gbp: "gbp";
        gel: "gel";
        gip: "gip";
        gmd: "gmd";
        gnf: "gnf";
        gtq: "gtq";
        gyd: "gyd";
        hkd: "hkd";
        hnl: "hnl";
        htg: "htg";
        huf: "huf";
        idr: "idr";
        ils: "ils";
        inr: "inr";
        isk: "isk";
        jmd: "jmd";
        jpy: "jpy";
        kes: "kes";
        kgs: "kgs";
        khr: "khr";
        kmf: "kmf";
        krw: "krw";
        kyd: "kyd";
        kzt: "kzt";
        lak: "lak";
        lkr: "lkr";
        lrd: "lrd";
        lsl: "lsl";
        mad: "mad";
        mdl: "mdl";
        mga: "mga";
        mkd: "mkd";
        mnt: "mnt";
        mop: "mop";
        mur: "mur";
        mvr: "mvr";
        mwk: "mwk";
        mxn: "mxn";
        myr: "myr";
        mzn: "mzn";
        nad: "nad";
        ngn: "ngn";
        nio: "nio";
        nok: "nok";
        npr: "npr";
        nzd: "nzd";
        pab: "pab";
        pen: "pen";
        pgk: "pgk";
        php: "php";
        pkr: "pkr";
        pln: "pln";
        pyg: "pyg";
        qar: "qar";
        ron: "ron";
        rsd: "rsd";
        rwf: "rwf";
        sar: "sar";
        sbd: "sbd";
        scr: "scr";
        sek: "sek";
        sgd: "sgd";
        shp: "shp";
        sos: "sos";
        srd: "srd";
        szl: "szl";
        thb: "thb";
        tjs: "tjs";
        top: "top";
        try: "try";
        ttd: "ttd";
        twd: "twd";
        tzs: "tzs";
        uah: "uah";
        ugx: "ugx";
        usd: "usd";
        uyu: "uyu";
        uzs: "uzs";
        vnd: "vnd";
        vuv: "vuv";
        wst: "wst";
        xaf: "xaf";
        xcd: "xcd";
        xcg: "xcg";
        xof: "xof";
        xpf: "xpf";
        yer: "yer";
        zar: "zar";
        zmw: "zmw";
    }>>>;
    customerIpAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isBusinessCustomer: z.ZodOptional<z.ZodBoolean>;
    customerTaxId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
type CheckoutParams = z.infer<typeof CheckoutParams>;
declare const checkout: (checkoutOptions?: CheckoutOptions) => (polar: Polar) => {
    checkout: better_auth.StrictEndpoint<"/checkout", {
        method: "POST";
        body: z.ZodObject<{
            products: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
            slug: z.ZodOptional<z.ZodString>;
            referenceId: z.ZodOptional<z.ZodString>;
            customFieldData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
            allowDiscountCodes: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
            discountId: z.ZodOptional<z.ZodString>;
            redirect: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
            embedOrigin: z.ZodOptional<z.ZodURL>;
            successUrl: z.ZodOptional<z.ZodString>;
            returnUrl: z.ZodOptional<z.ZodString>;
            allowTrial: z.ZodOptional<z.ZodBoolean>;
            trialInterval: z.ZodOptional<z.ZodEnum<{
                day: "day";
                week: "week";
                month: "month";
                year: "year";
            }>>;
            trialIntervalCount: z.ZodOptional<z.ZodNumber>;
            currency: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
                aed: "aed";
                all: "all";
                amd: "amd";
                aoa: "aoa";
                ars: "ars";
                aud: "aud";
                awg: "awg";
                azn: "azn";
                bam: "bam";
                bbd: "bbd";
                bdt: "bdt";
                bif: "bif";
                bmd: "bmd";
                bnd: "bnd";
                bob: "bob";
                brl: "brl";
                bsd: "bsd";
                bwp: "bwp";
                bzd: "bzd";
                cad: "cad";
                cdf: "cdf";
                chf: "chf";
                clp: "clp";
                cny: "cny";
                cop: "cop";
                crc: "crc";
                cve: "cve";
                czk: "czk";
                djf: "djf";
                dkk: "dkk";
                dop: "dop";
                dzd: "dzd";
                egp: "egp";
                etb: "etb";
                eur: "eur";
                fjd: "fjd";
                fkp: "fkp";
                gbp: "gbp";
                gel: "gel";
                gip: "gip";
                gmd: "gmd";
                gnf: "gnf";
                gtq: "gtq";
                gyd: "gyd";
                hkd: "hkd";
                hnl: "hnl";
                htg: "htg";
                huf: "huf";
                idr: "idr";
                ils: "ils";
                inr: "inr";
                isk: "isk";
                jmd: "jmd";
                jpy: "jpy";
                kes: "kes";
                kgs: "kgs";
                khr: "khr";
                kmf: "kmf";
                krw: "krw";
                kyd: "kyd";
                kzt: "kzt";
                lak: "lak";
                lkr: "lkr";
                lrd: "lrd";
                lsl: "lsl";
                mad: "mad";
                mdl: "mdl";
                mga: "mga";
                mkd: "mkd";
                mnt: "mnt";
                mop: "mop";
                mur: "mur";
                mvr: "mvr";
                mwk: "mwk";
                mxn: "mxn";
                myr: "myr";
                mzn: "mzn";
                nad: "nad";
                ngn: "ngn";
                nio: "nio";
                nok: "nok";
                npr: "npr";
                nzd: "nzd";
                pab: "pab";
                pen: "pen";
                pgk: "pgk";
                php: "php";
                pkr: "pkr";
                pln: "pln";
                pyg: "pyg";
                qar: "qar";
                ron: "ron";
                rsd: "rsd";
                rwf: "rwf";
                sar: "sar";
                sbd: "sbd";
                scr: "scr";
                sek: "sek";
                sgd: "sgd";
                shp: "shp";
                sos: "sos";
                srd: "srd";
                szl: "szl";
                thb: "thb";
                tjs: "tjs";
                top: "top";
                try: "try";
                ttd: "ttd";
                twd: "twd";
                tzs: "tzs";
                uah: "uah";
                ugx: "ugx";
                usd: "usd";
                uyu: "uyu";
                uzs: "uzs";
                vnd: "vnd";
                vuv: "vuv";
                wst: "wst";
                xaf: "xaf";
                xcd: "xcd";
                xcg: "xcg";
                xof: "xof";
                xpf: "xpf";
                yer: "yer";
                zar: "zar";
                zmw: "zmw";
            }>>>;
            customerIpAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            isBusinessCustomer: z.ZodOptional<z.ZodBoolean>;
            customerTaxId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>;
    }, {
        url: string;
        redirect: boolean;
    }>;
};

declare const polar: <O extends PolarOptions>(options: O) => {
    id: "polar";
    endpoints: {
        checkout: better_auth.StrictEndpoint<"/checkout", {
            method: "POST";
            body: zod.ZodObject<{
                products: zod.ZodOptional<zod.ZodUnion<readonly [zod.ZodArray<zod.ZodString>, zod.ZodString]>>;
                slug: zod.ZodOptional<zod.ZodString>;
                referenceId: zod.ZodOptional<zod.ZodString>;
                customFieldData: zod.ZodOptional<zod.ZodRecord<zod.ZodString, zod.ZodUnion<readonly [zod.ZodString, zod.ZodNumber, zod.ZodBoolean]>>>;
                metadata: zod.ZodOptional<zod.ZodRecord<zod.ZodString, zod.ZodUnion<readonly [zod.ZodString, zod.ZodNumber, zod.ZodBoolean]>>>;
                allowDiscountCodes: zod.ZodOptional<zod.ZodCoercedBoolean<unknown>>;
                discountId: zod.ZodOptional<zod.ZodString>;
                redirect: zod.ZodOptional<zod.ZodCoercedBoolean<unknown>>;
                embedOrigin: zod.ZodOptional<zod.ZodURL>;
                successUrl: zod.ZodOptional<zod.ZodString>;
                returnUrl: zod.ZodOptional<zod.ZodString>;
                allowTrial: zod.ZodOptional<zod.ZodBoolean>;
                trialInterval: zod.ZodOptional<zod.ZodEnum<{
                    day: "day";
                    week: "week";
                    month: "month";
                    year: "year";
                }>>;
                trialIntervalCount: zod.ZodOptional<zod.ZodNumber>;
                currency: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                    aed: "aed";
                    all: "all";
                    amd: "amd";
                    aoa: "aoa";
                    ars: "ars";
                    aud: "aud";
                    awg: "awg";
                    azn: "azn";
                    bam: "bam";
                    bbd: "bbd";
                    bdt: "bdt";
                    bif: "bif";
                    bmd: "bmd";
                    bnd: "bnd";
                    bob: "bob";
                    brl: "brl";
                    bsd: "bsd";
                    bwp: "bwp";
                    bzd: "bzd";
                    cad: "cad";
                    cdf: "cdf";
                    chf: "chf";
                    clp: "clp";
                    cny: "cny";
                    cop: "cop";
                    crc: "crc";
                    cve: "cve";
                    czk: "czk";
                    djf: "djf";
                    dkk: "dkk";
                    dop: "dop";
                    dzd: "dzd";
                    egp: "egp";
                    etb: "etb";
                    eur: "eur";
                    fjd: "fjd";
                    fkp: "fkp";
                    gbp: "gbp";
                    gel: "gel";
                    gip: "gip";
                    gmd: "gmd";
                    gnf: "gnf";
                    gtq: "gtq";
                    gyd: "gyd";
                    hkd: "hkd";
                    hnl: "hnl";
                    htg: "htg";
                    huf: "huf";
                    idr: "idr";
                    ils: "ils";
                    inr: "inr";
                    isk: "isk";
                    jmd: "jmd";
                    jpy: "jpy";
                    kes: "kes";
                    kgs: "kgs";
                    khr: "khr";
                    kmf: "kmf";
                    krw: "krw";
                    kyd: "kyd";
                    kzt: "kzt";
                    lak: "lak";
                    lkr: "lkr";
                    lrd: "lrd";
                    lsl: "lsl";
                    mad: "mad";
                    mdl: "mdl";
                    mga: "mga";
                    mkd: "mkd";
                    mnt: "mnt";
                    mop: "mop";
                    mur: "mur";
                    mvr: "mvr";
                    mwk: "mwk";
                    mxn: "mxn";
                    myr: "myr";
                    mzn: "mzn";
                    nad: "nad";
                    ngn: "ngn";
                    nio: "nio";
                    nok: "nok";
                    npr: "npr";
                    nzd: "nzd";
                    pab: "pab";
                    pen: "pen";
                    pgk: "pgk";
                    php: "php";
                    pkr: "pkr";
                    pln: "pln";
                    pyg: "pyg";
                    qar: "qar";
                    ron: "ron";
                    rsd: "rsd";
                    rwf: "rwf";
                    sar: "sar";
                    sbd: "sbd";
                    scr: "scr";
                    sek: "sek";
                    sgd: "sgd";
                    shp: "shp";
                    sos: "sos";
                    srd: "srd";
                    szl: "szl";
                    thb: "thb";
                    tjs: "tjs";
                    top: "top";
                    try: "try";
                    ttd: "ttd";
                    twd: "twd";
                    tzs: "tzs";
                    uah: "uah";
                    ugx: "ugx";
                    usd: "usd";
                    uyu: "uyu";
                    uzs: "uzs";
                    vnd: "vnd";
                    vuv: "vuv";
                    wst: "wst";
                    xaf: "xaf";
                    xcd: "xcd";
                    xcg: "xcg";
                    xof: "xof";
                    xpf: "xpf";
                    yer: "yer";
                    zar: "zar";
                    zmw: "zmw";
                }>>>;
                customerIpAddress: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                isBusinessCustomer: zod.ZodOptional<zod.ZodBoolean>;
                customerTaxId: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, zod_v4_core.$strip>;
        }, {
            url: string;
            redirect: boolean;
        }>;
    } | {
        meters: better_auth.StrictEndpoint<"/usage/meters/list", {
            method: "GET";
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
            query: zod.ZodObject<{
                page: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                limit: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
            }, zod_v4_core.$strip>;
        }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalcustomermeterslist_js.CustomerPortalCustomerMetersListResponse, {
            page: number;
        }>>;
        ingestion: better_auth.StrictEndpoint<"/usage/ingest", {
            method: "POST";
            body: zod.ZodObject<{
                event: zod.ZodString;
                metadata: zod.ZodRecord<zod.ZodString, zod.ZodUnion<readonly [zod.ZodString, zod.ZodNumber, zod.ZodBoolean]>>;
            }, zod_v4_core.$strip>;
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, _polar_sh_sdk_models_components_eventsingestresponse_js.EventsIngestResponse>;
    } | {
        portal: better_auth.StrictEndpoint<"/customer/portal", {
            method: ("POST" | "GET")[];
            body: zod.ZodOptional<zod.ZodObject<{
                redirect: zod.ZodOptional<zod.ZodBoolean>;
            }, zod_v4_core.$strip>>;
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, {
            url: string;
            redirect: boolean;
        }>;
        state: better_auth.StrictEndpoint<"/customer/state", {
            method: "GET";
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, _polar_sh_sdk_models_components_customerstate_js.CustomerState>;
        benefits: better_auth.StrictEndpoint<"/customer/benefits/list", {
            method: "GET";
            query: zod.ZodOptional<zod.ZodObject<{
                page: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                limit: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
            }, zod_v4_core.$strip>>;
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalbenefitgrantslist_js.CustomerPortalBenefitGrantsListResponse, {
            page: number;
        }>>;
        subscriptions: better_auth.StrictEndpoint<"/customer/subscriptions/list", {
            method: "GET";
            query: zod.ZodOptional<zod.ZodObject<{
                referenceId: zod.ZodOptional<zod.ZodString>;
                page: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                limit: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                active: zod.ZodOptional<zod.ZodCoercedBoolean<unknown>>;
            }, zod_v4_core.$strip>>;
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_subscriptionslist_js.SubscriptionsListResponse, {
            page: number;
        }> | _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalsubscriptionslist_js.CustomerPortalSubscriptionsListResponse, {
            page: number;
        }>>;
        orders: better_auth.StrictEndpoint<"/customer/orders/list", {
            method: "GET";
            query: zod.ZodOptional<zod.ZodObject<{
                page: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                limit: zod.ZodOptional<zod.ZodCoercedNumber<unknown>>;
                productBillingType: zod.ZodOptional<zod.ZodEnum<{
                    recurring: "recurring";
                    one_time: "one_time";
                }>>;
            }, zod_v4_core.$strip>>;
            use: ((inputContext: better_auth.MiddlewareInputContext<better_auth.MiddlewareOptions>) => Promise<{
                session: {
                    session: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    };
                    user: Record<string, any> & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    };
                };
            }>)[];
        }, _polar_sh_sdk_types_operations_js.PageIterator<_polar_sh_sdk_models_operations_customerportalorderslist_js.CustomerPortalOrdersListResponse, {
            page: number;
        }>>;
    } | {
        polarWebhooks: better_auth.StrictEndpoint<"/polar/webhooks", {
            method: "POST";
            metadata: {
                isAction: false;
            };
            cloneRequest: true;
        }, {
            received: boolean;
        }>;
    };
    init(): {
        options: {
            databaseHooks: {
                user: {
                    create: {
                        before: (user: Partial<better_auth.User>, context: better_auth.GenericEndpointContext | null) => Promise<void>;
                        after: (user: better_auth.User, context: better_auth.GenericEndpointContext | null) => Promise<void>;
                    };
                    update: {
                        after: (user: better_auth.User, context: better_auth.GenericEndpointContext | null) => Promise<void>;
                    };
                    delete: {
                        after: (user: better_auth.User, context: better_auth.GenericEndpointContext | null) => Promise<void>;
                    };
                };
            };
        };
    };
};

declare const polarClient: () => {
    id: "polar-client";
    $InferServerPlugin: ReturnType<typeof polar>;
    getActions: ($fetch: better_auth_client.BetterFetch) => {
        checkoutEmbed: (data: Omit<CheckoutParams, "redirect" | "embedOrigin">, fetchOptions?: BetterFetchOption) => Promise<PolarEmbedCheckout>;
    };
};

export { type CheckoutOptions as C, type PortalConfig as P, type UsageOptions as U, type WebhooksOptions as W, CheckoutParams as a, portal as b, checkout as c, polar as p, polarClient, usage as u, webhooks as w };
