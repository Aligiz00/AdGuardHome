import DhcpConfig, { IDhcpConfig } from 'Entities/DhcpConfig';
import DhcpSearchResult, { IDhcpSearchResult } from 'Entities/DhcpSearchResult';
import DhcpStaticLease, { IDhcpStaticLease } from 'Entities/DhcpStaticLease';
import DhcpStatus, { IDhcpStatus } from 'Entities/DhcpStatus';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class DhcpApi {
    static async checkActiveDhcp(): Promise<IDhcpSearchResult | Error> {
        return await fetch(`/dhcp/find_active_dhcp`, {
            method: 'POST',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async dhcpAddStaticLease(dhcpstaticlease: IDhcpStaticLease): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const dhcpstaticleaseValid = new DhcpStaticLease(dhcpstaticlease);
        haveError.push(...dhcpstaticleaseValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/dhcp/add_static_lease`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dhcpstaticleaseValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async dhcpRemoveStaticLease(dhcpstaticlease: IDhcpStaticLease): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const dhcpstaticleaseValid = new DhcpStaticLease(dhcpstaticlease);
        haveError.push(...dhcpstaticleaseValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/dhcp/remove_static_lease`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dhcpstaticleaseValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async dhcpReset(): Promise<number | Error> {
        return await fetch(`/dhcp/reset`, {
            method: 'POST',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async dhcpSetConfig(dhcpconfig: IDhcpConfig): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const dhcpconfigValid = new DhcpConfig(dhcpconfig);
        haveError.push(...dhcpconfigValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/dhcp/set_config`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dhcpconfigValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async dhcpStatus(): Promise<IDhcpStatus | Error> {
        return await fetch(`/dhcp/status`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
