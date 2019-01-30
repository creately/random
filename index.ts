export class Random  {

    protected static BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split( '' );

    public static base62 ( size: number ): string  {
        const bytes = crypto.getRandomValues( new Uint8Array( size ));
        const chars = [];
        for ( let i = 0; i < size; ++i ) {
            chars[i] = this.BASE62[bytes[i] % 62];
        }
        return chars.join( '' );
    }

    public static id ( size: number ): string {
        return this.base62( size )
    }
}
