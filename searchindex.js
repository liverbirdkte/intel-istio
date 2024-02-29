Search.setIndex({"docnames": ["README", "docs/CRYPTOMB", "docs/Excluding-Istio-interfaces-for-5G-core", "docs/Grafana-Dashboard", "docs/Kiali", "docs/Meshery", "docs/QAT", "docs/SGX-gateway", "docs/SGX-mTLS", "docs/envoy-cryptomb", "docs/envoy-hyperscan", "docs/envoy-nghttp2", "docs/envoy-qat", "docs/envoy-qatzip", "docs/envoy-qatzstd", "docs/envoy-sgx", "docs/setup-sgx-software", "features", "index"], "filenames": ["README.md", "docs/CRYPTOMB.md", "docs/Excluding-Istio-interfaces-for-5G-core.md", "docs/Grafana-Dashboard.md", "docs/Kiali.md", "docs/Meshery.md", "docs/QAT.md", "docs/SGX-gateway.md", "docs/SGX-mTLS.md", "docs/envoy-cryptomb.md", "docs/envoy-hyperscan.md", "docs/envoy-nghttp2.md", "docs/envoy-qat.md", "docs/envoy-qatzip.md", "docs/envoy-qatzstd.md", "docs/envoy-sgx.md", "docs/setup-sgx-software.md", "features.rst", "index.rst"], "titles": ["Intel managed distribution of Envoy", "Istio acceleration with Intel\u00ae AVX512 crypto instructions", "Excluding Istio interfaces for 5G core", "Grafana Dashboard", "Kiali", "Use Meshery to deploy and manage Istio with Intel Features", "Istio crypto and compression acceleration with QAT", "Istio Gateway Private Key Protection with SGX", "Istio mTLS Private Key Protection with SGX", "Envoy acceleration with Intel\u00ae AVX512 crypto instructions", "Hyperscan", "Envoy Nghttp2 HPACK acceleration", "Envoy acceleration with QAT", "Qatzip Compressor", "Qat Zstd Compressor", "Private key protection with Intel SGX", "Prerequisites", "Features", "&lt;no title&gt;"], "terms": {"i": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "project": [0, 7, 16], "aim": [0, 16], "showcas": 0, "integr": [0, 4, 13, 14, 16, 17], "variou": 0, "technologi": [0, 5, 6, 12, 13, 14], "The": [0, 1, 2, 4, 6, 7, 8, 9, 10, 12, 15, 16], "focu": [0, 4], "let": [0, 5], "both": [0, 1, 2, 7, 8], "upstream": [0, 2], "commun": [0, 3, 7], "user": [0, 2, 5, 16], "know": 0, "what": 0, "work": [0, 2], "find": [0, 16], "gap": 0, "relat": 0, "hardwar": [0, 5, 6, 7, 8, 12, 13, 14, 16], "enabl": [0, 1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16], "test": [0, 8, 16, 17], "deploi": [0, 2, 4, 17, 18], "each": [0, 2, 4, 7, 8, 13, 14], "need": [0, 1, 2, 4, 5, 7, 8, 11, 12, 13, 14, 16], "take": [0, 5], "effect": 0, "describ": [0, 5], "respect": [0, 2], "page": [0, 4, 5], "tl": [0, 1, 3, 6, 7, 8, 9, 12], "handshak": [0, 1, 5, 6, 7, 8, 9, 12], "acceler": [0, 5, 13, 14, 17, 18], "avx512": [0, 11, 17, 18], "cryptomb": [0, 1, 3, 5, 9, 12], "qat2": 0, "0": [0, 2, 7, 8, 14, 16], "http": [0, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 16], "data": [0, 1, 2, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16], "compress": [0, 11, 12, 13, 14, 17, 18], "qatzip": [0, 6], "qatzstd": 0, "regular": [0, 10], "express": [0, 10], "hyperscan": 0, "2": [0, 2, 7, 10, 11, 16], "header": [0, 2, 8, 11], "algorithm": [0, 11, 16], "hpack": 0, "privat": [0, 9, 12, 17, 18], "kei": [0, 1, 5, 9, 12, 16, 17, 18], "protect": [0, 17, 18], "sgx": [0, 17, 18], "connect": [0, 1, 2, 3, 7, 8, 9, 12, 16, 17], "balanc": [0, 3], "dlb": 0, "us": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 15, 16, 17, 18], "follow": [0, 1, 2, 3, 4, 6, 9, 10, 12, 16], "command": [0, 1, 2, 3, 4, 6, 7, 12], "ci": 0, "run_envoy_dock": 0, "sh": 0, "do_ci": 0, "releas": [0, 4, 5, 7], "onli": [0, 5, 7, 8, 10], "server_onli": 0, "docker": [0, 2, 5, 7], "imag": [0, 7, 8, 10], "upload": [0, 3, 5], "public": [0, 7], "dockerhub": 0, "you": [0, 1, 2, 4, 5, 6, 7, 8, 9, 12, 16], "can": [0, 1, 2, 4, 5, 7, 8, 10], "directli": [0, 5], "1": [0, 1, 2, 4, 5, 6, 7, 8, 10, 12, 16], "19": [0, 2, 4, 7, 16], "servic": [0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 16], "mesh": [0, 2, 4, 5, 7, 8], "mtl": [0, 7, 17, 18], "gatewai": [0, 1, 2, 3, 5, 6, 9, 17, 18], "grafana": [0, 4, 17, 18], "dashboard": [0, 4, 17, 18], "exclud": [0, 10], "interfac": [0, 5, 16], "5g": 0, "core": 0, "mesheri": [0, 17, 18], "kiali": [0, 17, 18], "kubernet": [0, 1, 2, 3, 4, 6, 7, 8, 12, 16, 17], "v1": [0, 2, 4, 7, 8], "24": [0, 2], "15": 0, "cert": [0, 3, 7, 8, 9, 12, 16], "7": [0, 2, 8], "later": [0, 1, 5, 7, 8, 9, 16], "linux": [0, 2, 6, 7, 8, 12, 16], "kernel": [0, 6, 7, 8, 12, 16], "5": [0, 2, 6, 7, 8, 12], "18": [0, 2, 5], "devic": [0, 5, 6, 7, 8, 12, 16], "plugin": [0, 5, 6, 7, 8, 12, 16], "v0": [0, 2], "follwo": 0, "basic": [0, 4], "istioctl": [0, 1, 2, 3, 4, 6, 7, 8], "set": [0, 2, 4, 5, 7, 8, 16], "hub": 0, "io": [0, 2, 3, 5, 6, 7, 8], "tag": 0, "cryptograph": [1, 5, 6, 9], "oper": [1, 2, 3, 5, 9], "ar": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16], "among": [1, 9], "most": [1, 5, 9, 15], "comput": [1, 9], "intens": [1, 9], "critic": [1, 9, 15], "when": [1, 7, 8, 9, 11, 13, 14], "come": [1, 2, 9, 13, 14], "secur": [1, 2, 5, 6, 7, 8, 9, 12, 15, 16], "envoi": [1, 2, 3, 6, 8, 10, 13, 14, 15, 18], "sidecar": [1, 2, 5, 6, 7, 8], "handl": [1, 7, 8], "intercept": 1, "traffic": [1, 2, 15, 17], "depend": [1, 2, 16], "upon": 1, "case": [1, 2, 9], "an": [1, 2, 4, 5, 13, 14], "ingress": [1, 2, 3, 6, 7], "must": [1, 4], "larg": [1, 10, 16], "number": [1, 2, 10], "incom": 1, "through": [1, 2, 5, 7, 8, 13, 14], "proxi": [1, 5, 6, 8, 16], "load": [1, 3, 5], "increas": [1, 6, 11, 12], "potenti": [1, 5, 9], "perform": [1, 6, 9, 10, 11, 12, 17], "mani": [1, 16], "factor": 1, "size": [1, 11, 16], "cpuset": 1, "which": [1, 2, 5, 7, 8, 10, 15, 16], "run": [1, 4, 7, 8, 12, 16, 17], "pattern": [1, 5, 10], "These": 1, "impact": 1, "serv": 1, "new": [1, 4, 5, 13, 14, 16], "request": [1, 4, 5, 13, 14], "In": [1, 2, 5, 6, 9, 12, 16], "thi": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16], "document": [1, 2, 4, 5, 7, 8, 9], "learn": [1, 9, 12], "how": [1, 2, 5, 7, 8, 9, 12], "achiev": [1, 5, 9], "improv": [1, 2, 5, 9, 11], "mean": [1, 2, 5, 9], "advanc": [1, 2, 4, 5, 9, 16], "vector": [1, 5, 9], "extens": [1, 5, 9, 10, 12, 13, 14, 15, 16], "512": [1, 5, 9], "avx": [1, 5, 9], "simd": [1, 5, 9], "singl": [1, 2, 5, 6, 9], "multipl": [1, 2, 5, 9, 10], "mechan": [1, 2, 5, 9], "up": [1, 8, 9, 17], "eight": [1, 5, 9], "rsa": [1, 5, 7, 9], "ecdsa": [1, 5, 9, 16], "gather": [1, 5, 9], "buffer": [1, 5, 9], "process": [1, 5, 9, 13, 14, 16], "same": [1, 5, 9, 12, 16], "time": [1, 2, 5, 9, 11], "provid": [1, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16], "avail": [1, 4, 5, 6, 9, 16], "recent": [1, 5, 9], "launch": [1, 5, 9, 16], "3rd": [1, 5, 9], "gener": [1, 2, 5, 7, 9, 16, 17], "xeon": [1, 5, 6, 9, 16], "scalabl": [1, 5, 6, 9], "processor": [1, 5, 6, 9, 16], "server": [1, 2, 7, 8, 9, 12, 16, 17], "cluster": [1, 2, 3, 4, 5, 7, 8], "least": [1, 3, 9], "one": [1, 3, 4, 5, 7, 8, 9, 13, 14], "node": [1, 2, 3, 4, 6, 7, 8, 9, 12, 16], "If": [1, 2, 4, 5, 7, 8, 13, 14, 16], "all": [1, 2, 3, 4, 5, 9, 12], "support": [1, 2, 7, 8, 10, 16], "add": [1, 3, 6, 8, 9, 12, 16], "some": [1, 2, 5], "label": [1, 2, 4], "divid": 1, "two": [1, 2, 4, 5, 16], "kind": [1, 2, 5, 7, 8], "manual": [1, 5, 7], "nfd": 1, "And": [1, 7, 8, 9, 12, 16], "requir": [1, 2, 4, 6, 7, 8, 9, 12, 16], "bmi2": [1, 9], "avx512f": [1, 9], "avx512dq": [1, 9], "avx512bw": [1, 9], "avx512ifma": [1, 9], "avx512vbmi2": [1, 9], "_": [1, 3, 7, 9, 16], "enabledbyo": [1, 9], "14": 1, "y": [1, 2, 6, 7, 8, 10, 16], "f": [1, 2, 3, 4, 5, 6, 7, 8], "yaml": [1, 2, 3, 4, 5, 6, 7, 8], "With": [1, 2, 5, 6, 11], "abov": [1, 5, 6, 7, 8, 16], "contain": [1, 2, 3, 5, 6, 7, 12], "A": [1, 2, 8, 17], "snapshot": 1, "": [1, 2, 4, 6, 7, 8, 16, 17], "contribut": 1, "instruct": [2, 5, 16, 17, 18], "control": [2, 7, 8], "plane": [2, 5], "cp": 2, "dp": 2, "namespac": [2, 3, 4, 5, 7, 8], "have": [2, 4, 5, 7, 8, 16], "inject": [2, 5, 6, 7, 8], "howev": [2, 15], "dataplan": 2, "network": 2, "upfgtp": 2, "n6": 2, "That": 2, "doe": 2, "monitor": [2, 3], "latenc": 2, "worker": [2, 13, 14], "gtp5g": 2, "due": [2, 15], "evolut": 2, "would": 2, "everi": 2, "version": [2, 4, 5, 7, 8, 16], "pleas": [2, 5, 7, 8, 10, 15, 16], "23": 2, "upper": 2, "than": [2, 16], "4": [2, 7], "ubuntu": [2, 16], "20": [2, 11, 16], "04": [2, 16], "rhel8": 2, "git": 2, "clone": 2, "b": [2, 3], "3": [2, 4, 5, 7, 8, 16], "github": [2, 3, 5, 8, 16], "com": [2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16], "cd": 2, "make": [2, 4, 7, 8], "sudo": [2, 6, 12, 16], "repo": [2, 3], "towards5g": 2, "raw": [2, 4], "githubusercont": [2, 4], "orang": 2, "opensourc": 2, "main": [2, 8, 16], "updat": [2, 3, 6, 7, 12, 16], "appli": [2, 3, 4, 6, 7, 11], "customis": 2, "resourc": [2, 5, 8], "file": [2, 3, 5, 6, 8, 12, 15], "we": [2, 5, 7, 8, 11, 15, 16], "natoutgo": 2, "containeripforward": 2, "5gc": 2, "note": [2, 5, 7, 8], "cidr": 2, "should": [2, 5, 7, 9, 12, 16], "match": 2, "cat": [2, 6, 7, 8, 12], "eof": [2, 6, 7, 8, 12], "kubectl": [2, 3, 4, 6, 7, 8], "creat": [2, 3, 4, 5, 7, 13, 14], "section": [2, 5, 7, 8, 16], "includ": [2, 10, 16], "base": [2, 5, 6, 8, 12, 16], "configur": [2, 6, 7, 8, 10, 16, 17], "For": [2, 4, 5, 7, 8, 12, 13, 14], "more": [2, 4, 5, 7, 8, 11, 16], "inform": [2, 4, 5, 7, 13, 14], "see": [2, 4, 5, 13, 14, 17], "projectcalico": 2, "doc": [2, 5, 16], "tigera": 2, "master": [2, 16], "refer": [2, 7, 8, 10, 15, 16], "api": [2, 5, 7, 8, 10, 14, 16], "apivers": [2, 7, 8], "metadata": [2, 7, 8], "name": [2, 5, 7, 8, 9, 10, 12, 13, 14], "default": [2, 5, 6, 7, 8, 10, 12, 16], "spec": [2, 7, 8], "caliconetwork": 2, "ippool": 2, "cannot": [2, 16], "modifi": 2, "post": 2, "blocksiz": 2, "26": 2, "192": 2, "168": 2, "16": [2, 16], "encapsul": 2, "vxlancrosssubnet": 2, "nodeselector": 2, "apiserv": 2, "v3": [2, 4, 9, 10, 12, 14], "manifest": [2, 5, 7], "here": [2, 5, 11], "n": [2, 3, 4, 7, 8], "virtual": [2, 3, 4], "web": [2, 5], "ui": [2, 3, 4, 5], "v1alpha3": 2, "webui": 2, "selector": 2, "ingressgatewai": [2, 3, 7, 8], "port": [2, 3, 7], "80": 2, "protocol": 2, "host": [2, 7, 8, 16], "virtualservic": 2, "rout": [2, 4, 10], "destin": 2, "svc": [2, 4], "local": [2, 7, 8, 16], "5000": 2, "cni": 2, "cnf": 2, "pod": [2, 6, 7, 8], "k8snetworkplumbingwg": 2, "33c0d1bd86b22106442c84b8d9e28945cf6182e3": 2, "deploy": [2, 5, 6, 7, 8, 17], "daemonset": 2, "thick": 2, "yml": 2, "mai": [2, 4, 5, 16], "tune": 2, "your": [2, 4, 5, 6, 7, 12], "subnet": 2, "check": [2, 5, 6, 12, 15, 16], "do": [2, 7, 16], "exampl": [2, 4, 5, 7, 9, 12], "ens3": 2, "instead": 2, "eth0": 2, "detail": [2, 4, 5, 8], "e": [2, 4, 10, 16], "g": [2, 10], "ip": [2, 5], "10": [2, 14], "237": 2, "72": 2, "address": [2, 3, 5], "Then": [2, 5], "like": [2, 4, 5, 7, 8, 10], "below": [2, 5, 7, 9, 12], "global": [2, 10], "n6network": 2, "subnetip": 2, "gatewayip": 2, "upf": 2, "n6if": 2, "ipaddress": 2, "xx": 2, "pick": 2, "free": 2, "omit": 2, "extra": [2, 11], "reserv": 2, "contact": 2, "administr": 2, "block": 2, "certain": 2, "rule": [2, 8], "upgrad": [2, 3, 16], "intel": [2, 3, 4, 6, 7, 8, 12, 13, 14, 16, 17, 18], "n4network": 2, "masterif": 2, "n3network": 2, "podannot": 2, "excludeinterfac": 2, "unabl": 2, "It": [2, 4, 5, 7, 8, 16], "show": [2, 4, 16], "warn": 2, "unhealthi": 2, "x10": 2, "over": 2, "45": 2, "kubelet": 2, "readi": [2, 6, 7, 8], "probe": 2, "fail": 2, "get": [2, 4, 7, 8, 11, 16], "47": 2, "205": 2, "15021": 2, "healthz": 2, "context": [2, 5, 13, 14], "deadlin": 2, "exceed": 2, "client": [2, 8, 16], "timeout": 2, "while": [2, 10], "await": 2, "temporari": 2, "hack": 2, "edit": [2, 5, 7], "annot": [2, 6, 7, 8], "statu": [2, 7, 8, 16], "wait": 2, "restart": [2, 3, 6, 7, 8, 12, 16], "deployupf": 2, "fals": [2, 7, 16], "deploywebui": 2, "mongodb": 2, "persist": 2, "n2network": 2, "n9network": 2, "webui_service_typ": 2, "without": [2, 15], "export": [2, 7, 16], "loadbalanc": 2, "nodeport": [2, 7], "type": [2, 9, 10, 12, 13, 14, 16], "look": [2, 4, 7, 8], "per": [2, 4], "ag": [2, 7, 8], "amf": 2, "95f88965b": 2, "qvvsn": 2, "21h": 2, "ausf": 2, "7994587f88": 2, "5nsld": 2, "nrf": 2, "67d7d8cf66": 2, "kn4p9": 2, "nssf": 2, "5cb78f9b9c": 2, "xm7vn": 2, "pcf": 2, "6cd66d46d4": 2, "s8n2f": 2, "smf": 2, "c7d9fcffd": 2, "j7lv5": 2, "udm": 2, "58b4d54bbf": 2, "dxmb": 2, "udr": 2, "78d5484d58": 2, "htc9m": 2, "5f975d95fd": 2, "dzrtj": 2, "67ddd9967d": 2, "gklrr": 2, "otherwis": [2, 11, 16], "other": [2, 5, 7, 8, 9, 12, 16], "system": [2, 3, 4, 5, 6, 7, 8, 12, 15, 16], "o": [2, 4, 7, 8, 16], "jsonpath": [2, 7, 8], "curl": [2, 4, 5, 7, 8, 16], "bowser": 2, "url": [2, 5, 16], "login": [2, 3, 17], "credenti": [2, 3, 7], "admin": [2, 3], "subscrib": [2, 16], "ueransim": 2, "simul": 2, "newli": 2, "sim": 2, "ad": 2, "necessari": 2, "befor": [2, 4, 7], "compon": [2, 3, 5, 10], "uesimtun0": 2, "uninstal": [2, 7, 17], "redeploi": 2, "fix": 2, "gnb": 2, "6dffd9c777": 2, "qlz7l": 2, "64m": 2, "6cf9b565d8": 2, "skp54": 2, "exter": 2, "simimul": 2, "via": [2, 5, 6, 7, 12], "pod_nam": 2, "l": [2, 5, 7, 8], "item": [2, 7, 8], "ha": [2, 5, 6, 7, 8, 10, 12, 16], "been": [2, 5, 6, 8, 10, 12, 16], "exec": [2, 8], "internet": [2, 11, 16], "ping": [2, 5], "corp": 2, "our": [2, 5], "ntp": 2, "respond": 2, "To": [2, 3, 4, 5, 6, 9, 12, 15], "featur": [2, 6, 7, 8, 9, 18], "httpbin": [2, 7, 8], "anywher": [2, 7, 8], "p": [2, 7], "8080": 2, "kennethreitz": 2, "v": [2, 3, 7, 8], "ip_addr_of_httpbin_host": 2, "78": 2, "tcp_nodelai": 2, "agent": [2, 3], "58": 2, "accept": 2, "200": 2, "ok": 2, "gunicorn": 2, "9": 2, "date": 2, "fri": 2, "09": 2, "dec": 2, "2022": 2, "11": [2, 7, 8, 16], "51": 2, "gmt": 2, "keep": 2, "aliv": 2, "content": [2, 7, 16], "applic": [2, 3, 4, 8, 17], "json": [2, 3, 8], "length": 2, "111": 2, "allow": [2, 10, 16], "origin": [2, 8, 11], "true": [2, 7, 8, 10, 14], "left": [2, 4], "intact": 2, "As": 2, "exlclud": 2, "doesn": 2, "t": 2, "go": [2, 4, 5, 16], "repli": 2, "back": [2, 11], "few": [2, 4, 10], "field": [2, 7], "x": [2, 3, 7, 8, 16], "decor": 2, "prerequisit": [3, 5, 17], "ic": 3, "lake": 3, "manag": [3, 7, 8, 17, 18], "helm": [3, 5, 7, 8], "readm": 3, "instal": [3, 12, 16, 17], "istio": [3, 15, 17, 18], "bootstrap": 3, "xd": 3, "environ": [3, 4, 5], "variabl": 3, "filter": [3, 6, 10], "valu": 3, "stat": 3, "issuer": [3, 7, 8], "certif": [3, 5, 7, 8, 16], "endpoint": [3, 6], "gw": 3, "separ": 3, "isol": 3, "kube": [3, 5, 7, 8], "prometheu": [3, 5], "stack": [3, 7, 8], "chart": [3, 5, 7, 8], "access": [3, 4, 7, 17], "forward": [3, 8], "localhost": [3, 8, 16], "path": [3, 5, 10, 16], "password": [3, 16], "prom": 3, "rollout": 3, "import": 3, "distribut": [3, 4, 18], "from": [3, 4, 5, 6, 7, 8, 12, 16], "remov": [3, 16], "delet": [3, 4, 7], "purg": [3, 7], "observ": 4, "consol": 4, "capabl": 4, "help": 4, "understand": 4, "structur": [4, 10], "infer": 4, "topologi": 4, "also": [4, 5, 10, 17], "health": 4, "metric": [4, 5], "queri": 4, "trace": 4, "alreadi": [4, 5], "along": 4, "its": [4, 5, 8, 13, 14], "telemetri": 4, "storag": 4, "addon": 4, "might": 4, "consid": 4, "option": [4, 5, 7, 8], "those": [4, 16], "skip": 4, "step": [4, 16], "sampl": [4, 5, 17], "visiabl": 4, "Or": [4, 5], "guid": [4, 5, 6, 12, 16], "verifi": [4, 5, 7], "open": [4, 5], "execut": [4, 7], "view": 4, "overview": 4, "appear": [4, 5], "immedi": 4, "after": [4, 5], "log": [4, 5], "displai": 4, "screenshot": 4, "similar": [4, 5, 6, 10, 12, 16], "select": [4, 5], "kebab": 4, "menu": [4, 5, 16], "choos": 4, "d": [4, 6, 7, 8, 12, 16], "inspect": 4, "top": 4, "right": 4, "card": 4, "vertic": 4, "dot": 4, "click": [4, 5], "lead": 4, "list": [4, 11, 16], "workload": [4, 5, 7], "config": [4, 5, 7, 8], "productpag": 4, "wizard": 4, "defin": [4, 6], "specif": 4, "percentag": 4, "app": [4, 5, 8], "sure": [4, 7, 8], "edg": 4, "review": 4, "within": [4, 5], "triangl": 4, "notic": 4, "evenli": 4, "three": 4, "v2": 4, "link": [4, 15], "found": 4, "side": 4, "panel": [4, 5], "action": [4, 5], "drop": [4, 5], "down": [4, 5], "unavail": 4, "first": [4, 16], "drag": [4, 5], "slider": 4, "specifi": [4, 16], "33": 4, "preview": [4, 17], "button": [4, 5], "confirm": 4, "hand": 4, "navig": [4, 5], "bar": 4, "return": 4, "now": 4, "badg": 4, "icon": 4, "send": [4, 5, 13, 14], "bookinfo": 4, "second": 4, "watch": 4, "dev": [4, 12, 16], "null": 4, "w": [4, 7], "http_code": 4, "gateway_url": 4, "minut": 4, "reflect": 4, "thu": [4, 6, 12], "fact": 4, "successfulli": [4, 16], "sourc": [5, 16], "cloud": [5, 16], "nativ": 5, "adopt": 5, "ani": [5, 15], "still": 5, "under": [5, 12], "rapid": [5, 16], "develop": [5, 16], "chang": [5, 6, 12, 16], "offer": 5, "u": [5, 16], "intuit": 5, "visual": 5, "conveni": 5, "wai": [5, 9, 12], "demonstr": 5, "platform": [5, 6, 12, 16], "bash": [5, 6, 8, 12, 16], "compos": 5, "want": [5, 7, 8], "person": 5, "setup": [5, 16], "visit": 5, "hostnam": 5, "9081": 5, "attempt": 5, "auto": 5, "detect": 5, "kubeconfig": 5, "store": [5, 7, 8], "home": [5, 7, 9, 12], "automat": 5, "remot": [5, 7, 8], "locat": [5, 16], "desktop": 5, "clsuter": 5, "minikub": 5, "etc": [5, 6, 12, 16], "current": [5, 16], "publish": 5, "catalog": 5, "websit": 5, "FOR": 5, "qat": [5, 13, 17, 18], "quickassist": [5, 6, 12, 13, 14], "offload": [5, 6, 12], "authent": [5, 6, 12], "burden": 5, "cpu": [5, 6, 12], "significantli": [5, 6, 12], "effici": [5, 6, 12], "standard": [5, 6, 12, 14], "solut": [5, 6, 11, 12, 15], "download": [5, 16], "own": 5, "kuberenet": 5, "benchmark": 5, "call": 5, "fortio": 5, "easi": 5, "repeat": 5, "even": 5, "schedul": 5, "particular": 5, "calendar": 5, "On": 5, "therefor": 5, "assum": 5, "backbend": 5, "expos": [5, 16], "them": [5, 16], "protocul": 5, "shown": 5, "blob": 5, "md": 5, "retriev": [5, 16], "lb": 5, "input": [5, 10], "custom": [5, 7, 8, 10], "fetch": 5, "interact": 5, "infrastructur": 5, "mode": [5, 16], "give": 5, "about": 5, "ultim": 5, "drage": 5, "drope": 5, "search": 5, "desgin": 5, "merg": 5, "anoth": 5, "guestbook": 5, "error": [5, 16], "final": 5, "readonli": 5, "logic": 5, "represent": 5, "entir": 5, "were": 5, "discov": 5, "start": 5, "termin": [5, 9], "session": [5, 13], "stream": [5, 10], "mesheryctl": 5, "stop": 5, "tree": [6, 7, 8, 12, 16], "driver": [6, 7, 8, 12, 16], "util": [6, 12], "qatlib": [6, 12, 13, 14], "librari": [6, 10, 13, 14, 16], "descript": 6, "4th": 6, "gen": 6, "cy": 6, "dc": 6, "prepar": [6, 7, 12], "17": [6, 12], "iommu": [6, 12], "bio": [6, 12, 16], "enhanc": [6, 7, 8, 12, 16], "runtim": [6, 12, 16], "memori": [6, 12, 15, 16], "lock": [6, 12], "limit": [6, 12], "grub": [6, 12], "grub_cmdline_linux": [6, 12], "intel_iommu": [6, 12], "vfio": [6, 12], "pci": [6, 12], "id": [6, 10, 12, 16], "8086": [6, 12], "4941": [6, 12], "reboot": [6, 12], "onc": [6, 12], "dmesg": [6, 12], "grep": [6, 8, 12], "528237": [6, 12], "dmar": [6, 12], "containerd": [6, 12], "crio": [6, 12], "mkdir": [6, 7, 12], "systemd": [6, 12], "c": [6, 8, 12], "memlock": [6, 12], "conf": [6, 7, 12, 16], "limitmemlock": [6, 12], "134217728": [6, 12], "concept": [6, 12], "systemctl": [6, 12, 16], "daemon": [6, 7, 8, 12], "reload": [6, 12], "hw": 6, "alloc": 6, "addit": 6, "templat": [6, 7, 8], "sidecarinjectorwebhook": 6, "At": [6, 9], "stage": 6, "qathw": 6, "decompress": 6, "insid": [7, 8], "enclav": [7, 8, 15, 16], "never": [7, 8], "clear": [7, 8], "author": [7, 8], "scenario": [7, 8], "softwar": [7, 8, 15], "ca": [7, 8], "csr": [7, 8], "kmra": [7, 8], "attest": [7, 16], "need_quot": [7, 8], "flag": [7, 8], "cripto": [7, 8], "toolkit": [7, 8], "build": [7, 8, 13, 14, 16], "sd": [7, 8], "aesm": [7, 8], "attestaion": [7, 8], "cover": [7, 8], "k8": [7, 8], "tc": [7, 8], "ensur": [7, 8], "gate": [7, 8], "experimentalcertificatesigningrequestcontrol": [7, 8], "featureg": [7, 8], "signer": 7, "cm": [7, 8], "clusterissu": [7, 8], "selfsign": [7, 8], "isca": [7, 8], "commonnam": [7, 8], "secretnam": [7, 8], "issuerref": [7, 8], "group": [7, 8], "replac": [7, 8], "hsm": 7, "xarg": [7, 8], "secret": [7, 8], "crt": [7, 8], "base64": [7, 8], "sinc": [7, 16], "accord": 7, "quot": [7, 16], "verif": 7, "env": 7, "v1alpha1": 7, "random_nonc": 7, "verifii": [7, 8], "By": [7, 8], "deault": [7, 8], "namespc": [7, 8], "state": [7, 8], "55f8dbb66c": 7, "6qx2": 7, "73": 7, "istiod": [7, 8], "65db6d8666": 7, "jgmf7": 7, "75": 7, "cr": 7, "clusterrol": [7, 8], "httpbingw": 7, "enough": [7, 16], "privileg": 7, "success": [7, 8], "7fbf9db8f6": 7, "qvqn4": 7, "97": 7, "ago": 7, "2m27": 7, "testud": 7, "2m52": 7, "quoteattest": 7, "sgxquoteattest": 7, "testsd": 7, "4m36": 7, "qa_nam": 7, "line": 7, "tool": [7, 16], "read": 7, "write": 7, "km": 7, "wrap": 7, "publickei": 7, "pubkei": 7, "openssl": 7, "req": 7, "x509": 7, "sha256": 7, "dai": 7, "365": 7, "newkei": 7, "2048": 7, "subj": 7, "inc": 7, "cn": [7, 8], "keyout": 7, "out": [7, 16], "organ": 7, "cakei": 7, "set_seri": 7, "opt": [7, 16], "tcsclusterissu": 7, "key_path": 7, "wrapped_kei": 7, "pin": 7, "hsmuserpin": 7, "token": 7, "hsmsdsserver": 7, "modul": 7, "usr": 7, "lib": [7, 16], "softhsm": 7, "libsofthsm2": 7, "so": 7, "liter": 7, "qa": 7, "commond": 7, "append": 7, "complet": [7, 8, 16], "establish": [7, 8], "normal": 7, "ingress_nam": 7, "ingress_n": 7, "secure_ingress_port": 7, "ingress_host": 7, "po": [7, 8], "hostip": 7, "hhost": 7, "resolv": [7, 15], "cacert": 7, "418": 7, "okai": 7, "got": 7, "respons": 7, "trust": [7, 8], "6cd77bf4bf": 8, "t4cwj": 8, "70m": 8, "6cf88b78dc": 8, "dthpw": 8, "sleep": 8, "remind": 8, "correct": [8, 16], "rbac": [8, 10], "account": 8, "5f6bf4d4d9": 8, "5jxj8": 8, "30": 8, "57bc8d74fc": 8, "2lw4n": 8, "8000": 8, "spiff": 8, "sa": 8, "hash": 8, "2875ce095572f8a12b6080213f7789bfb699099b83e8ea2889a2d7b3eb9523e6": 8, "subject": 8, "r": [8, 16], "corpor": 8, "uri": 8, "dump": 8, "15000": 8, "config_dump": 8, "envoy_conf": 8, "seen": 8, "private_key_provid": [8, 9, 12], "configu": 8, "real": 8, "safe": 8, "special": 9, "becom": 9, "http1": [9, 12], "http2": [9, 12], "just": [9, 12], "usual": [9, 12], "transportsocket": [9, 12], "downstream": [9, 12], "transport_socket": [9, 12], "typed_config": [9, 10, 12, 13, 14], "googleapi": [9, 10, 12, 13, 14], "downstreamtlscontext": [9, 12], "common_tls_context": [9, 12], "tls_certif": [9, 12], "certificate_chain": [9, 12], "filenam": [9, 12], "hejiexu": [9, 12], "pem": [9, 12], "provider_nam": [9, 12], "v3alpha": [9, 10, 12, 13], "cryptombprivatekeymethodconfig": 9, "private_kei": [9, 12], "poll_delai": [9, 12], "nano": [9, 12], "5000000": [9, 12], "http3": [9, 12], "quic": [9, 12], "transport": [9, 12], "socket": [9, 12, 16], "part": [9, 12], "quicdownstreamtransport": [9, 12], "high": 10, "hybrid": 10, "automata": 10, "techniqu": 10, "simultan": 10, "across": 10, "syntax": 10, "pcre": 10, "valid": 10, "contrib": 10, "implement": [10, 11, 16], "chain": 10, "custom_match": 10, "input_match": 10, "behavior": 10, "report": 10, "sever": 10, "turn": 10, "den": 10, "deni": 10, "quiet": 10, "combin": 10, "act": 10, "googl": 10, "re2": 10, "utf": 10, "8": 10, "easili": 10, "default_regex_engin": 10, "regex_engin": 10, "modern": 11, "spent": 11, "leverag": [11, 15, 16], "huffman": 11, "encod": 11, "No": 11, "patch": 11, "dure": 11, "usag": 11, "larger": 11, "shoud": 11, "less": 11, "kilo": 11, "byte": 11, "fall": 11, "complex": 11, "consist": 11, "lot": 11, "non": 11, "alphabet": 11, "charact": 11, "crypto": [12, 17, 18], "passthrough": 12, "qatprivatekeymethodconfig": 12, "faster": [13, 14], "gzip": 13, "compressor_librari": [13, 14], "text_optim": [13, 14], "hardware_buffer_s": 13, "sz_8k": 13, "attach": [13, 14], "threadloc": [13, 14], "thread": [13, 14], "compression_level": 14, "enable_qat_zstd": 14, "qat_zstd_fallback_threshold": 14, "introduct": [14, 17], "One": 15, "benefit": 15, "introduc": 15, "encrypt": [15, 16], "asset": 15, "well": 15, "thei": 15, "either": [15, 16], "pure": 15, "text": 15, "problem": 15, "guard": [15, 16], "put": 15, "prefer": 15, "recommend": 15, "standalon": 15, "complic": 15, "dependeci": 16, "famili": 16, "icelak": 16, "prmrr": 16, "becaus": 16, "differ": 16, "exact": 16, "But": 16, "entri": 16, "typic": 16, "re": 16, "sapphir": 16, "volatil": 16, "1lm": 16, "tme": 16, "edkii": 16, "map": 16, "mktme": 16, "mt": 16, "tdx": 16, "total": 16, "sw": 16, "ubuntu20": 16, "v5": 16, "13": 16, "lowest": 16, "dkm": 16, "panic": 16, "throw": 16, "prevent": 16, "being": 16, "correctli": 16, "older": 16, "compris": 16, "sdk": 16, "psw": 16, "again": 16, "guidelin": 16, "redund": 16, "apt": 16, "essenti": 16, "python": 16, "binari": 16, "latest": 16, "encourag": 16, "wget": 16, "01": 16, "org": 16, "distro": 16, "sgx_linux_x64_sdk_2": 16, "100": 16, "bin": 16, "chmod": 16, "echo": 16, "deb": 16, "arch": 16, "amd64": 16, "sgx_repo": 16, "focal": 16, "tee": 16, "qo": 16, "libsgx": 16, "common": 16, "dcap": 16, "ql": 16, "libsgxdcap": 16, "qpl": 16, "urt": 16, "epid": 16, "ex": 16, "center": 16, "primit": 16, "target": 16, "enterpris": 16, "model": 16, "ellipt": 16, "curv": 16, "digit": 16, "signatur": 16, "versu": 16, "privaci": 16, "identif": 16, "sgxdatacenterattestationprimit": 16, "quotegener": 16, "packagequot": 16, "pcc": 16, "lightweight": 16, "provis": 16, "cach": 16, "nodej": 16, "pck": 16, "collater": 16, "demand": 16, "databas": 16, "pc": 16, "portal": 16, "trustedservic": 16, "j": 16, "sl": 16, "nodesourc": 16, "setup_16": 16, "sqlite3": 16, "www": 16, "en": 16, "articl": 16, "quick": 16, "html": 16, "rememb": 16, "network_set": 16, "toke": 16, "machin": 16, "direct": 16, "regist": 16, "pckidretrievaltool": 16, "output": 16, "registr": 16, "sent": 16, "pckid_retriev": 16, "csv": 16, "aesmd": 16, "obtain": 16, "qcnl": 16, "self": 16, "sign": 16, "demo": 16, "samplecod": 16, "whether": 16, "code": 16, "0xe017": 16, "no_proxi": 16, "127": 16, "pdf": 16, "acronym": 17, "clean": 17, "architectur": 17, "design": 17, "backend": 17, "beta": 17, "meshmap": 17, "graph": 17, "examin": 17, "shift": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"intel": [0, 1, 5, 9, 15], "manag": [0, 5], "distribut": 0, "envoi": [0, 9, 11, 12], "featur": [0, 5, 17], "build": 0, "run": [0, 2, 5], "istio": [0, 1, 2, 4, 5, 6, 7, 8], "support": 0, "version": 0, "instal": [0, 1, 2, 4, 5, 6, 7, 8, 13, 14], "acceler": [1, 6, 9, 11, 12], "avx512": [1, 9], "crypto": [1, 6, 9], "instruct": [1, 9], "introduct": [1, 5, 6, 7, 8, 9, 11, 12, 15], "prerequisit": [1, 4, 6, 7, 8, 9, 12, 16], "see": [1, 7, 8], "also": [1, 7, 8], "exclud": 2, "interfac": 2, "5g": 2, "core": 2, "gtpg5g": 2, "kernel": 2, "modul": 2, "add": 2, "helm": 2, "chart": 2, "calico": 2, "multu": 2, "free5gc": 2, "verif": 2, "test": [2, 5], "try": 2, "access": [2, 5], "from": 2, "ue": 2, "grafana": [3, 5], "dashboard": [3, 5], "deploy": 3, "uninstal": 3, "kiali": 4, "prometheu": 4, "jaeger": 4, "gener": [4, 10], "graph": 4, "examin": 4, "configur": [4, 5, 9, 11, 12, 13, 14, 15], "traffic": 4, "shift": 4, "us": [5, 13, 14], "mesheri": 5, "deploi": [5, 7], "The": 5, "benefit": 5, "architectur": 5, "login": 5, "connect": 5, "kubernet": 5, "design": 5, "import": 5, "applic": [5, 7], "backend": 5, "server": 5, "perform": 5, "profil": 5, "tl": 5, "enabl": 5, "ingressgatewai": 5, "integr": 5, "A": 5, "preview": 5, "": 5, "beta": 5, "meshmap": 5, "clean": [5, 7], "up": [5, 7], "compress": 6, "qat": [6, 12, 14], "acronym": 6, "gatewai": 7, "privat": [7, 8, 15], "kei": [7, 8, 15], "protect": [7, 8, 15], "sgx": [7, 8, 15, 16], "sampl": 7, "mtl": 8, "creat": 8, "signer": 8, "appli": 8, "quot": 8, "attest": 8, "crd": 8, "workload": 8, "hsm": 8, "hyperscan": 10, "As": 10, "matcher": 10, "match": 10, "regex": 10, "engin": 10, "nghttp2": 11, "hpack": 11, "notif": 11, "qatzip": 13, "compressor": [13, 14], "exampl": [13, 14], "how": [13, 14], "work": [13, 14], "zstd": 14, "plugin": 14, "softwar": 16, "stack": 16}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Intel managed distribution of Envoy": [[0, "intel-managed-distribution-of-envoy"]], "Features": [[0, "features"], [0, "id1"], [17, "features"]], "Build": [[0, "build"]], "Run": [[0, "run"]], "Intel managed distribution of Istio": [[0, "intel-managed-distribution-of-istio"]], "Supported versions": [[0, "supported-versions"]], "Install": [[0, "install"], [1, "install"]], "Istio acceleration with Intel\u00ae AVX512 crypto instructions": [[1, "istio-acceleration-with-intel-avx512-crypto-instructions"]], "Introduction": [[1, "introduction"], [6, "introduction"], [7, "introduction"], [8, "introduction"], [9, "introduction"], [11, "introduction"], [12, "introduction"], [15, "introduction"]], "Prerequisites": [[1, "prerequisites"], [6, "prerequisites"], [7, "prerequisites"], [8, "prerequisites"], [9, "prerequisites"], [12, "prerequisites"], [16, "prerequisites"]], "See also": [[1, "see-also"], [7, "see-also"], [8, "see-also"]], "Excluding Istio interfaces for 5G core": [[2, "excluding-istio-interfaces-for-5g-core"]], "Install gtpg5g kernel module": [[2, "install-gtpg5g-kernel-module"]], "Add Helm charts": [[2, "add-helm-charts"]], "Install Calico": [[2, "install-calico"]], "Install Istio": [[2, "install-istio"]], "Install Multus": [[2, "install-multus"]], "Install free5gc": [[2, "install-free5gc"]], "Install Verification": [[2, "install-verification"]], "Testing": [[2, "testing"]], "Try to access it from the UE by running:": [[2, "try-to-access-it-from-the-ue-by-running"]], "Grafana Dashboard": [[3, "grafana-dashboard"]], "Deployment": [[3, "deployment"]], "Uninstallation": [[3, "uninstallation"]], "Kiali": [[4, "kiali"]], "Prerequisite": [[4, "prerequisite"]], "Installation": [[4, "installation"], [7, "installation"], [8, "installation"]], "Install Prometheus": [[4, "install-prometheus"]], "Install Jaeger": [[4, "install-jaeger"]], "Install Kiali": [[4, "install-kiali"]], "Generating a graph": [[4, "generating-a-graph"]], "Examining Istio configuration": [[4, "examining-istio-configuration"]], "Traffic Shifting": [[4, "traffic-shifting"]], "Use Meshery to deploy and manage Istio with Intel Features": [[5, "use-meshery-to-deploy-and-manage-istio-with-intel-features"]], "Meshery Introduction": [[5, "meshery-introduction"]], "The benefit to use Meshery to deploy and manage Istio": [[5, "the-benefit-to-use-meshery-to-deploy-and-manage-istio"]], "Architecture": [[5, "architecture"]], "Install Meshery": [[5, "install-meshery"]], "Access and Login Meshery": [[5, "access-and-login-meshery"]], "Configure Connection to Kubernetes": [[5, "configure-connection-to-kubernetes"]], "Meshery Design": [[5, "meshery-design"]], "Import Meshery Design": [[5, "import-meshery-design"]], "Deploy Meshery Design": [[5, "deploy-meshery-design"]], "Applications/Backend Server": [[5, "applications-backend-server"]], "Run a performance test": [[5, "run-a-performance-test"]], "Performance profile": [[5, "performance-profile"]], "Run a performance test with TLS enabled in Istio Ingressgateway": [[5, "run-a-performance-test-with-tls-enabled-in-istio-ingressgateway"]], "Grafana Dashboard Integration with Meshery": [[5, "grafana-dashboard-integration-with-meshery"]], "A Preview of Meshery\u2019s beta feature MeshMap": [[5, "a-preview-of-mesherys-beta-feature-meshmap"]], "Clean up": [[5, "clean-up"]], "Istio crypto and compression acceleration with QAT": [[6, "istio-crypto-and-compression-acceleration-with-qat"]], "Acronyms": [[6, "acronyms"]], "Istio install with QAT": [[6, "istio-install-with-qat"]], "Istio Gateway Private Key Protection with SGX": [[7, "istio-gateway-private-key-protection-with-sgx"]], "Deploy sample application": [[7, "deploy-sample-application"]], "Cleaning Up": [[7, "cleaning-up"]], "Istio mTLS Private Key Protection with SGX": [[8, "istio-mtls-private-key-protection-with-sgx"]], "Create signer": [[8, "create-signer"]], "Apply quote attestation CRD": [[8, "apply-quote-attestation-crd"]], "Protect the private keys of workloads with HSM": [[8, "protect-the-private-keys-of-workloads-with-hsm"]], "Envoy acceleration with Intel\u00ae AVX512 crypto instructions": [[9, "envoy-acceleration-with-intel-avx512-crypto-instructions"]], "Configuration": [[9, "configuration"], [11, "configuration"], [12, "configuration"], [15, "configuration"]], "Hyperscan": [[10, "hyperscan"]], "As a matcher of generic matching": [[10, "as-a-matcher-of-generic-matching"]], "As a regex engine": [[10, "as-a-regex-engine"]], "Envoy Nghttp2 HPACK acceleration": [[11, "envoy-nghttp2-hpack-acceleration"]], "Notification": [[11, "notification"]], "Envoy acceleration with QAT": [[12, "envoy-acceleration-with-qat"]], "Qatzip Compressor": [[13, "qatzip-compressor"]], "Example configuration": [[13, "example-configuration"], [14, "example-configuration"]], "How it works": [[13, "how-it-works"], [14, "how-it-works"]], "Installing and using QATzip": [[13, "installing-and-using-qatzip"]], "Qat Zstd Compressor": [[14, "qat-zstd-compressor"]], "Installing and using QAT-ZSTD-Plugin": [[14, "installing-and-using-qat-zstd-plugin"]], "Private key protection with Intel SGX": [[15, "private-key-protection-with-intel-sgx"]], "SGX Software Stack": [[16, "sgx-software-stack"]]}, "indexentries": {}})