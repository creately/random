export function Random () {
    const BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split( '' );
    const base62 = ( size: number ): string => {
        const bytes = crypto.getRandomValues( new Uint8Array( size ));
        const chars = [];
        for ( let i = 0; i < size; ++i ) {
            chars[i] = BASE62[bytes[i] % 62];
        }
        return chars.join( '' );
    }
    return {
        id: ( size: number ) => base62( size )
    }
}
