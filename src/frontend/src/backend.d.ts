import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface VoiceSubmission {
    id: bigint;
    audioStorageKey: string;
    name: string;
    timestamp: Timestamp;
    phone: string;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    counsellingType: string;
    timestamp: Timestamp;
    phone: string;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getVoiceSubmissions(): Promise<Array<VoiceSubmission>>;
    storeContactSubmission(name: string, phone: string, counsellingType: string): Promise<bigint>;
    storeVoiceSubmission(name: string, phone: string, audioStorageKey: string): Promise<bigint>;
}
