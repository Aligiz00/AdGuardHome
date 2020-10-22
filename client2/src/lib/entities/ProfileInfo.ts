// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IProfileInfo {
    name?: string;
}

export default class ProfileInfo {
    readonly _name: string | undefined;

    get name(): string | undefined {
        return this._name;
    }

    constructor(props: IProfileInfo) {
        if (typeof props.name === 'string') {
            this._name = props.name.trim();
        }
    }

    serialize(): IProfileInfo {
        const data: IProfileInfo = {
        };
        if (typeof this._name !== 'undefined') {
            data.name = this._name;
        }
        return data;
    }

    validate(): string[] {
        const validateRequired = {
            name: !this._name ? true : typeof this._name === 'string' && !this._name ? true : this._name,
        };
        const isError: string[] = [];
        Object.keys(validateRequired).forEach((key) => {
            if (!(validateRequired as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IProfileInfo): ProfileInfo {
        return new ProfileInfo(props);
    }

    readonly keys: { [key: string]: string } = {
        name: 'name',
        }
;

    mergeDeepWith(props: Partial<ProfileInfo>): ProfileInfo {
        const updateData: Partial<IProfileInfo> = {};
        Object.keys(props).forEach((key: keyof ProfileInfo) => {
            const updateKey = this.keys[key] as keyof IProfileInfo;
            if ((props[key] as any).serialize) {
                (updateData[updateKey] as any) = (props[key] as any).serialize() as Pick<IProfileInfo, keyof IProfileInfo>;
            } else {
                (updateData[updateKey] as any) = props[key];
            }
        });
        return new ProfileInfo({ ...this.serialize(), ...updateData });
    }
}
