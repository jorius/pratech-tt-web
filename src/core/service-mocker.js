// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import constants from '../constants';
import { decodeBase64String } from '../util';

// @constants
const HTTP_SUCCESS_CODE = 200;
export const HTTP_UNAUTHORIZED_CODE = 401;

const getParams = (call) => {
    const params = JSON.parse(call.data);
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

    mockAdapter.onPost(url).reply((call) => {
        const { username, password } = getParams(call);
        const { loginEmail, loginPassword } = config.settings.serviceMocker;

        const success = (username === loginEmail) && (password === decodeBase64String(loginPassword));

        const httpCode = success
            ? HTTP_SUCCESS_CODE
            : HTTP_UNAUTHORIZED_CODE;

        const commonData = {
            message: success
                ? constants.notificationType.SUCCESS
                : config.text.loginPage.error,
            messageType: success
                ? constants.notificationType.SUCCESS
                : constants.notificationType.ERROR,
            success,
            httpCode
        };

        return createHttpResponse({
            data: success
                ? config.mockData.securityLoginSvcResponse
                : {},
            ...commonData
        });
    });
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
