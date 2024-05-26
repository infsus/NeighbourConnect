package hr.fer.zpr.infsus.nec.common.dto;

public record PageableResponseDTO<T> (long count, T content) {}
