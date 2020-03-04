// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import constants from '../constants';
import { decodeBase64String } from '../util';

// @constants
const HTTP_SUCCESS_CODE = 200;
const HTTP_UNAUTHORIZED_CODE = 401;

const getParams = call => {
    const { params } = JSON.parse(call.data);
    return params;
};

const createHttpResponse = ({
    data = null,
    httpCode = HTTP_SUCCESS_CODE,
    message = null,
    messageType = null,
    success = true
}) => ([httpCode, {
    data,
    message,
    messageType,
    success
}]);

const mockSecurityLoginSvc = mockAdapter => {
    const url = config.services.auth.login;

    mockAdapter.onPost(url).reply(call => {
        const { email, password } = getParams(call);
        const { loginEmail, loginPassword } = config.settings.serviceMocker;

        const success = (email === loginEmail) && (password === decodeBase64String(loginPassword));

        const httpCode = success
            ? HTTP_SUCCESS_CODE
            : HTTP_UNAUTHORIZED_CODE;

        const commonData = {
            message: success
                ? constants.notificationType.SUCCESS
                : constants.notificationType.ERROR,
            messageType: success
                ? constants.notificationType.SUCCESS
                : constants.notificationType.ERROR,
            success,
            httpCode
        };

        return createHttpResponse({
            data: config.mockData.securityLoginSvcResponse,
            ...commonData
        });
    });
};

const mockGetShopCategories = mockAdapter => {
    const url = config.services.shop.categories;
    const { shopCategories } = config.mockData;

    mockAdapter.onGet(url).reply(() =>
        createHttpResponse({
            data: shopCategories,
            message: constants.notificationType.SUCCESS,
            messageType: constants.notificationType.SUCCESS,
            success: true
        }));
};

const mockGetStoreBrands = mockAdapter => {
    const url = config.services.store.brands;
    const { storeBrands } = config.mockData;

    mockAdapter.onGet(url).reply(() =>
        createHttpResponse({
            data: storeBrands,
            message: constants.notificationType.SUCCESS,
            messageType: constants.notificationType.SUCCESS,
            success: true
        }));
};

export const initializeServiceMocker = () => {
    if (!config.settings.serviceMocker.isEnabled) {
        return null;
    }

    const mockAdapter = new MockAdapter(
        axios, {
            delayResponse: config.settings.serviceMocker.delayResponse
        }
    );

    const serviceMocker = {
        replyWithMockData: () => {
            mockAdapter.reset();
            mockGetShopCategories(mockAdapter);
            mockGetStoreBrands(mockAdapter);
            mockSecurityLoginSvc(mockAdapter);
        },
        replyWithNetworkError: () => {
            mockAdapter.reset();
            mockAdapter.onAny().networkError();
        }
    };

    serviceMocker.replyWithMockData();
    return serviceMocker;
};
