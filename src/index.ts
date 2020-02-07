
/* Automatic IntelliSense setup through compiler command parsing. 
 * 
 * 
 * Some Arduino compiler commands from different board packages:
 * AVR
 * /home/uli/.arduino15/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino5/bin/avr-g++ -c -g -Os -Wall -Wextra -std=gnu++11 -fpermissive -fno-exceptions -ffunction-sections -fdata-sections -fno-threadsafe-statics -Wno-error=narrowing -MMD -flto -mmcu=atmega328p -DF_CPU=16000000L -DARDUINO=10811 -DARDUINO_AVR_NANO -DARDUINO_ARCH_AVR -I/home/uli/.arduino15/packages/arduino/hardware/avr/1.8.2/cores/arduino -I/home/uli/.arduino15/packages/arduino/hardware/avr/1.8.2/variants/eightanaloginputs -I/home/uli/Projects/arduino/libraries/NewLiquidCrystal_lib -I/home/uli/Projects/arduino/libraries/LcdPong/src -I/home/uli/Projects/arduino/libraries/Encoder -I/home/uli/Projects/arduino/libraries/Button -I/home/uli/.arduino15/packages/arduino/hardware/avr/1.8.2/libraries/Wire/src /tmp/arduino_build_776874/sketch/lcdpong-butenc.ino.cpp -o /tmp/arduino_build_776874/sketch/lcdpong-butenc.ino.cpp.o
 * ESP32
 * /home/uli/.arduino15/packages/esp32/tools/xtensa-esp32-elf-gcc/1.22.0-80-g6c4433a-5.2.0/bin/xtensa-esp32-elf-g++ -DESP_PLATFORM "-DMBEDTLS_CONFIG_FILE=\"mbedtls/esp_config.h\"" -DHAVE_CONFIG_H -DGCC_NOT_5_2_0=0 -DWITH_POSIX -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/config -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/app_trace -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/app_update -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/asio -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/bootloader_support -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/bt -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/coap -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/console -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/driver -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-tls -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp32 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_adc_cal -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_event -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_http_client -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_http_server -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_https_ota -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_ringbuf -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/ethernet -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/expat -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/fatfs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/freemodbus -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/freertos -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/heap -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/idf_test -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/jsmn -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/json -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/libsodium -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/log -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/lwip -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mbedtls -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mdns -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/micro-ecc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mqtt -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/newlib -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/nghttp -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/nvs_flash -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/openssl -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/protobuf-c -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/protocomm -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/pthread -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/sdmmc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/smartconfig_ack -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/soc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/spi_flash -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/spiffs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/tcp_transport -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/tcpip_adapter -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/ulp -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/vfs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wear_levelling -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wifi_provisioning -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wpa_supplicant -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/xtensa-debug-module -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-face -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp32-camera -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-face -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/fb_gfx -std=gnu++11 -Os -g3 -Wpointer-arith -fexceptions -fstack-protector -ffunction-sections -fdata-sections -fstrict-volatile-bitfields -mlongcalls -nostdlib -Wall -Werror=all -Wextra -Wno-error=maybe-uninitialized -Wno-error=unused-function -Wno-error=unused-but-set-variable -Wno-error=unused-variable -Wno-error=deprecated-declarations -Wno-unused-parameter -Wno-unused-but-set-parameter -Wno-missing-field-initializers -Wno-sign-compare -fno-rtti -MMD -c -DF_CPU=240000000L -DARDUINO=10811 -DARDUINO_ESP32_DEV -DARDUINO_ARCH_ESP32 "-DARDUINO_BOARD=\"ESP32_DEV\"" "-DARDUINO_VARIANT=\"doitESP32devkitV1\"" -DESP32 -DCORE_DEBUG_LEVEL=0 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/cores/esp32 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/variants/doitESP32devkitV1 -I/home/uli/Projects/arduino/libraries/NewLiquidCrystal_lib -I/home/uli/Projects/arduino/libraries/LcdPong/src -I/home/uli/Projects/arduino/libraries/Encoder -I/home/uli/Projects/arduino/libraries/Button -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/libraries/Wire/src /tmp/arduino_build_744383/sketch/lcdpong-butenc.ino.cpp -o /tmp/arduino_build_744383/sketch/lcdpong-butenc.ino.cpp.o
 * ESP8266
 * /home/uli/.arduino15/packages/esp32/tools/xtensa-esp32-elf-gcc/1.22.0-80-g6c4433a-5.2.0/bin/xtensa-esp32-elf-g++ -DESP_PLATFORM "-DMBEDTLS_CONFIG_FILE=\"mbedtls/esp_config.h\"" -DHAVE_CONFIG_H -DGCC_NOT_5_2_0=0 -DWITH_POSIX -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/config -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/app_trace -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/app_update -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/asio -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/bootloader_support -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/bt -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/coap -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/console -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/driver -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-tls -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp32 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_adc_cal -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_event -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_http_client -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_http_server -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_https_ota -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp_ringbuf -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/ethernet -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/expat -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/fatfs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/freemodbus -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/freertos -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/heap -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/idf_test -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/jsmn -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/json -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/libsodium -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/log -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/lwip -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mbedtls -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mdns -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/micro-ecc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/mqtt -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/newlib -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/nghttp -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/nvs_flash -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/openssl -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/protobuf-c -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/protocomm -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/pthread -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/sdmmc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/smartconfig_ack -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/soc -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/spi_flash -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/spiffs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/tcp_transport -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/tcpip_adapter -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/ulp -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/vfs -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wear_levelling -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wifi_provisioning -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/wpa_supplicant -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/xtensa-debug-module -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-face -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp32-camera -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/esp-face -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/tools/sdk/include/fb_gfx -std=gnu++11 -Os -g3 -Wpointer-arith -fexceptions -fstack-protector -ffunction-sections -fdata-sections -fstrict-volatile-bitfields -mlongcalls -nostdlib -Wall -Werror=all -Wextra -Wno-error=maybe-uninitialized -Wno-error=unused-function -Wno-error=unused-but-set-variable -Wno-error=unused-variable -Wno-error=deprecated-declarations -Wno-unused-parameter -Wno-unused-but-set-parameter -Wno-missing-field-initializers -Wno-sign-compare -fno-rtti -MMD -c -DF_CPU=240000000L -DARDUINO=10811 -DARDUINO_ESP32_DEV -DARDUINO_ARCH_ESP32 "-DARDUINO_BOARD=\"ESP32_DEV\"" "-DARDUINO_VARIANT=\"doitESP32devkitV1\"" -DESP32 -DCORE_DEBUG_LEVEL=0 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/cores/esp32 -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/variants/doitESP32devkitV1 -I/home/uli/Projects/arduino/libraries/NewLiquidCrystal_lib -I/home/uli/Projects/arduino/libraries/LcdPong/src -I/home/uli/Projects/arduino/libraries/Encoder -I/home/uli/Projects/arduino/libraries/Button -I/home/uli/.arduino15/packages/esp32/hardware/esp32/1.0.4/libraries/Wire/src /tmp/arduino_build_470717/sketch/lcdpong-butenc.ino.cpp -o /tmp/arduino_build_470717/sketch/lcdpong-butenc.ino.cpp.o
 */

import * as path from "path";
import * as fs from "fs";
import { spawnSync } from "child_process";

/** Data structure carrying the output from a parsed compiler command. 
 * All compiler specific option prefixes are removed for includes and
 * defines.
 */
export class CompilerCmdParserResult {
    includes: Array<string> = [];
    defines: Array<string> = [];
    options: Array<string> = [];
    compiler: string = "";
    /** Dropped arguments like -c -Ox -o, the input and output file. */
    trash: Array<string> = [];
};

export type CompilerCmdParserSearchType = string | RegExp;

/** Base class for any compiler command parser engine.
 * If someone needs to write an engine: this is the base class.
 * For further inspiration take a look at the implementation of
 * CompilerCmdParserEngineGcc.
 */
export abstract class CompilerCmdParserEngine
{
    /** This array should contain the patterns which should match on
     * a valid compiler command line to identify the compiler command.
     * To be set by the derived class.
     * 
     * For performance reasons: place easy to test and frequent tests
     * first and rare/expensive cases last for better performance.
     */
    protected _match: CompilerCmdParserSearchType[] = [];
    /** This array should contain the patterns which should _NOT_ 
     * match on a valid compiler command line to identify the
     * compiler command.
     * To be set by the derived class.
     * 
     * For performance reasons: place easy to test and frequent tests
     * first and rare/expensive cases last for better performance.
     */
    protected _nomatch: CompilerCmdParserSearchType[] = [];

    /** The parsing function of a matched compiler command line.
     * If all conditions hold true (all _match are found and all _nomatch
     * are not found), this parsing function is invoked.
     * 
     * Here the derived class has to implement its parsing magic
     * to extract the desired includes, defines, compiler flags
     * and the compiler command.
     * 
     * @param line A string containing a compiler command line candidate.
     * @returns A valid parsing result in case parsing was successful
     * and undefined in case it failed fatally.
     */
    protected abstract parse(line: string): CompilerCmdParserResult;
    /** This function checks if the command line matches the
     * requirements given through _match and _nomatch and invokes
     * the parse function in case of a match.
     * @returns If match was found and parsing was successful
     * it returns the result else undefined.
     */
    public match(line: string): CompilerCmdParserResult | undefined
    {
        // check search queries that must match
        for (let re of this._match) {
            if (line.search(re) == -1) {
                return undefined;
            }
        }
        // check search queries that mustn't match
        for (let re of this._nomatch) {
            if (line.search(re) != -1) {
                return undefined;
            }
        }
        return this.parse(line);
    }
}

/** Compiler command parsing engine for gcc compilers.
 * 
 * 
 */
export class CompilerCmdParserEngineGcc
    extends CompilerCmdParserEngine
{
    constructor(sketch:string)
    {
        super();

        // TODO: windows and osx variants

        this._nomatch =
        [
            // make sure Arduino's not testing libraries
            /-o\s\/dev\/null/,
        ];
        this._match =
        [
            // make sure we're running g++
            /-g\+\+\s+/,
            // make sure we're compiling
            /\s+-c\s+/,
            // check if we're compiling the main sketch
            path.basename(sketch) + '.cpp.o',
        ];
    }
    protected parse(line: string): CompilerCmdParserResult
    {
        let result = new CompilerCmdParserResult();
        let args = line.split(/\s+/);

        for (let arg of args) {
            
            // drop empty arguments
            if (!arg.length) {
                continue;
            }

            // TODO:
            //   -U__STRICT_ANSI__ ?

            // unpack quoted elements like
            //
            //   "-DMBEDTLS_CONFIG_FILE=\"mbedtls/esp_config.h\""
            //   "-DARDUINO_BOARD=\"ESP32_DEV\""
            //   "-DARDUINO_VARIANT=\"doitESP32devkitV1\""
            let packed = arg.match(/^"(.+)"$/);
            if (packed) {
                arg = packed[1];
            }

            // extract defines
            let define = arg.match(/^-D(.+)/);
            if (define) {
                result.defines.push(define[1]);
                continue;
            }
            
            // extract includes
            let include = arg.match(/^-I(.+)/);
            if (include) {
                result.includes.push(include[1]);
                continue;
            }

            // extract the compiler executable
            let c = arg.match(/g\+\+$/);
            if (c) {
                result.compiler = arg;
                continue;
            }

            // filter out option trash
            let t = arg.match(/^-o|^-O|^-g|^-c|cpp(?:\.o){0,1}$/);
            if (t) {
                result.trash.push(arg);
                continue;
            }

            // collect options
            let o = arg.match(/^-/);
            if (o) {
                result.options.push(arg);
                continue;
            }
            
            // collect the rest
            result.trash.push(arg);
        }

        // Query compiler for intrinsic/built-in include paths
        if (result.compiler.length > 0) {

            // TODO: Windows

            // Spawn synchronous child process and run bash command
            // Source: https://stackoverflow.com/a/6666338
            let compilerinfocmd = `${result.compiler} -xc++ -E -v - < /dev/null 2>&1`;
            let child = spawnSync("bash", ["-c", compilerinfocmd], { encoding : 'utf8' });

            if (child.error || child.status != 0) {
                // TODO: report the execution failure
            } else {
                // Now we look for 
                //
                //   #include "..." search starts here:
                //   #include <...> search starts here:
                //      ...(include directories list)...
                //   End of search list.
                //
                // and extract the include directory list. Could be that some gcc
                // even lists something under
                //
                //   #include "..." search starts here:
                //
                // but I havn't seen it so far.
                let includeregex = /^#include\s+<\.\.\.>\ssearch\sstarts\shere\:$(.+)^End\sof\ssearch\slist\.$/ms;
                let match = child.stdout.match(includeregex);
                if (match) {
                    // Split list by newlines. Should be platform independent
                    let lines = match[1].split(/\s*(?:\r|\r\n|\n)\s*/);
                    // Filter out empty elements (in most cases only the last element)
                    lines = lines.filter(function (val:string){return val != ""});
                    // Add built-in includes to command line includes
                    result.includes = [...result.includes, ...lines];
                } else {
                    // TODO: issue info that include section has not been found 
                }
            }
        }
        return result;
    }
}

/** A compiler command parser.
 * Takes compiler commands line by line and tries to find the compile command
 * for the main .ino sketch. From that it tries to extract all includes,
 * defines, options and the compiler command itself. 
 * 
 * TODO: Make it more generic to support other compilers than gcc
 */
export class CompilerCmdParser
{
    private _result: CompilerCmdParserResult | undefined = undefined;
    private _engines: CompilerCmdParserEngine[] = [];

    /** Create a compiler command parser.
     * Sets up parsing operation.
     * @param engines Parsing engines for different compilers
     */
    constructor(engines:CompilerCmdParserEngine[])
    {
        this._engines = engines;
    }
    /** Returns the parsing result. 
     * Returns undefined when the parser fails or when the
     * parser didn't run.
     */
    get result(): CompilerCmdParserResult | undefined
    {
        return this._result;
    }
    /** Resets the parser by dropping the result.
     */
    public reset()
    {
        this._result = undefined;
    }
    /** Takes a command line and tries to parse it.
     * 
     * @param line Compiler command line candidate.
     * @returns The parsing result if the command line was parsed
     * successfully. It returns undefined if no match was found or
     * parsing failed. 
     */
    public parse(line: string): boolean
    {
        for (let engine of this._engines) {
            this._result = engine.match(line);
            if (this._result) {
                return true;
            }
        }
        return false;
    }
    /** Returns a callback which can be passed on to other functions
     * to call. For instance from stdout callbacks of child processes.
     * 
     * @param once If true this callback stops parsing as soon as a
     * valid result has been generated (to reduce overhead).
     */
    public callback(once: boolean = true): (line: string) => void
    {
        return (line:string) => {
            if (!this._result || !once) {
                this.parse(line);
            }
        }    
    }
    public processResult(configPath: string): boolean
    {
        if (this._result) {
            let cppProps = new CCppProperties(configPath);
            cppProps.merge(this._result);
            cppProps.write();
            return true;
        }
        return false;
    }
}

/** Class representing the contents of the IntelliSense
 * c_cpp_properties.json configuration file.
 * 
 * @see https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference
 */
export class CCppPropertiesConfiguration {
    name: string             = "Arduino";
    compilerPath: string     = "";
    compilerArgs: string []  = [];
    intelliSenseMode: string = "gcc-x64"; // since we're using arduino's compiler
    includePath: string[]    = [];
    forcedInclude: string[]  = [];
    cStandard: string        = "c11";
    cppStandard: string      = "c++11";   // as of 1.8.11 arduino is on C++11
    defines: string[]        = [];

    constructor(result: CompilerCmdParserResult)
    {
        this.compilerPath = result.compiler;
        this.compilerArgs = result.options;
        this.includePath  = result.includes;
        this.defines      = result.defines; 
    }
}

export class CCppPropertiesContent
{
    configurations: Array<CCppPropertiesConfiguration>

    constructor(result: CompilerCmdParserResult)
    {
        this.configurations = [new CCppPropertiesConfiguration(result)];
    }
};

export class CCppProperties
{
    proppath: string;
    propFileContent: CCppPropertiesContent | undefined;

    constructor(proppath: string)
    {
        this.proppath = proppath;
        this.propFileContent = undefined;
    }

    public read()
    {
        if (!fs.existsSync(this.proppath)) {
            return;
        }
        const propFileContentPlain = fs.readFileSync(this.proppath, "utf8");

        // NOTE: in JSON backslashes are escaped to \\\\

        this.propFileContent = JSON.parse(propFileContentPlain) as CCppPropertiesContent;
    }
    public merge(result: CompilerCmdParserResult)
    {
        let pc = new CCppPropertiesContent(result);

        // TODO:
        //  * merge with existing configuration if desired
        //  * check if contents changed after merging
        //

        this.propFileContent = pc;
    }

    public write()
    {
        // NOTE: in JSON backslashes are escaped to \\\\
        // TODO:
        //  * check if path exists, create if necessary
        //  * write file only if modified

        if (this.propFileContent) {
            let content = JSON.stringify(this.propFileContent, null, 4);
            fs.writeFileSync(this.proppath, content);
        }
    }
}
