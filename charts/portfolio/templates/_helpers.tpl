{{- define "portfolio.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "portfolio.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "portfolio.labels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ printf "%s-%s" .Chart.Name .Chart.Version }}
{{- end -}}

{{- define "portfolio.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{- define "portfolio.hosts" -}}
{{- $hosts := list .Values.istio.host -}}
{{- range .Values.istio.extraHosts }}{{ $hosts = append $hosts . }}{{ end -}}
{{- toJson $hosts -}}
{{- end -}}

{{- define "portfolio.gatewayRef" -}}
{{- if .Values.istio.gateway.create -}}
{{- printf "%s/%s" .Values.istio.gateway.namespace (include "portfolio.fullname" .) -}}
{{- else -}}
{{- .Values.istio.gateway.existingGateway -}}
{{- end -}}
{{- end -}}
